const express = require("express");
const { user, post, post_comment, hashtag } = require("../models");
const {
  generateAccessToken,
  authorized,
  sendRefreshToken,
  generateRefreshToken,
} = require("../middleware/tokenfunction");
const axios = require("axios");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const redirecURI = "http://localhost:8080/auth/googlesignin/callback";

module.exports = {
  signupController: (req, res) => {
    const { email, password, nickname } = req.body;
    //   파라미터로 email pass입력하지 않은경우
    if (!email || !password || !nickname) {
      return res.status(422).send({ message: "이메일, 비밀번호를 입력하세요" });
    }
    //회원가입은 email, nickname ,password를 넣는다.
    //일치하는 이메일,nickname 없을경우 db에 새로 만든다.
    user
      .findOrCreate({
        where: { email, nickname },
        defaults: { email, password, nickname },
      })
      .then(([data, created]) => {
        console.log(created, data);
        //회원가입 요청성공, 토큰을 보내준다. 어디에? header? cookie?
        if (created) {
          return res
            .status(201)
            .send({ data: data.dataValues, message: "회원가입 완료" });
        }
        //이미 있는경우g
        else {
          return res
            .status(400)
            .send({ message: "이미 존재하는 이메일 입니다." });
        }
      }); //catch 로 에러 잡아주기

    //created 이미있는거 보내면 false, 아니면 true;
  },

  nickCheckController: (req, res) => {
    const { nickname } = req.body;
    user
      .findOne({ where: { nickname } })
      .then((data) => {
        if (!data) {
          res.status(200).send({ message: "사용가능한 닉네임 입니다." });
        }
        res.status(400).send({ message: "존재하는 닉네임 입니다." });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  signinController: (req, res) => {
    const { password, email } = req.body;

    //pas, em 입력안한경우
    if (!password || !email) {
      return res
        .status(400)
        .send({ message: "이메일, 비밀번호를 입력해주세요" });
    }
    //로그인 시 입력한 데이터와 db 일치하는지 확인, 일치 -> 로그인, 불일치 -> 로그인 x
    user
      .findOne({ where: { email, password } })
      .then((data) => {
        // console.log(data.dataValues)
        if (!data) {
          return res.status(404).send({ message: "존재하지 않는 회원입니다." });
        }
        //로그인 성공시 토큰 발급 access , refresh

        const accessToken = generateAccessToken(data.dataValues);
        const refreshToken = generateRefreshToken(data.dataValues);
        // // sendToken(res,accessToken)
        // // res.setHeader("authorization", accessToken);

        sendRefreshToken(res, refreshToken);

        return res
          .status(200)
          .send({ accessToken, message: "로그인 되었습니다." });
        // res.json(accessToken)
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // googleSigninControl:(req,res)=>{
  // // console.log(req.body.authorizationCode)
  //     axios.post('https://oauth2.googleapis.com/token',
  //    {client_id:GOOGLE_CLIENT_ID,redirect_uri:'https%3A//oauth2.example.com/code',client_secret:GOOGLE_CLIENT_SECRET,code:'4/P7q7W91a-oMsCeLvIaQm6bTrgtp7',
  //         grant_type:'authorization_code'} ,{headers:{'Content-type':'application/x-www-form-urlencoded'}} )
  //         .then(rsp=>{
  //         console.log(rsp)
  //         })

  // },

  signoutContorller: async (req, res) => {
    // console.log(req.headers.authorization)
    // const accessTokenData = authorized(req,req.headers.authorization)
    // console.log(accessTokenData)
    // //accesstoken이 없어도 refresh는 삭제
    // if(!accessTokenData){
    //  //쿠키삭제
    // sendRefreshToken('refresh','')
    //     return res.status(401).send({message:'토큰이 존재하지 않습니다.'})
    // }
    // //logout시 accesstoken 을 검증한뒤 존재하면 (쿠키, 헤더 삭제)

    // res.setHeader('authorization', '')
    sendRefreshToken("refresh", "");

    return res.status(205).send({ message: "로그아웃 완료}" });
    // }
  },

  // newTokenController: async (req,res) =>{

  //     console.log(req.cookies.refresh)
  //     const refreshTokenData = authorized(req,req.cookies.refresh)
  //     if(!refreshTokenData){
  //         return res.status(401).sned({message:'해독할 수 없다.'})
  //     }

  // const userToken = await user.findOne({where:{email:refreshTokenData.email} } )

  // if(!userToken ){
  //     return res.status(401).send({message:'토큰과 일치하는 정보 없다'})
  // }

  // const accessToken = generateAccessToken(userToken )

  // return res.status(200).send({data:{accessToken:accessToken},message:'새 토큰 발급'})

  // }
};
