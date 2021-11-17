


const dotenv = require('dotenv');

const express = require('express')
const {user,post,post_comment,hashtag} = require('../models')
const {generateAccessToken,authorized,sendAccessToken,sendRefreshToken,generateRefreshToken} = require('../middleware/tokenfunction')
const axios = require('axios')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const redirectURI = 'http://localhost:8080/auth/googlesignin/callback'
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_AUTH_TOKEN_URL= 'https://oauth2.googleapis.com/token'
//http://localhost:8080/auth/googlesignin/callback?code=4/0AX4XfWjwI5C8uvI5LPyYkOsZRyxLqQ-L4k4EiL2luhP5h7ZVNRipCQjKUFvVTfulEBW_4A
const code = '4/0AX4XfWhGZIcmaQNI_JKhliDmcasWY3kMnuVqbw-jUJcdU3ZJojgdP2SM6yYKI7TFvnbJKw'
module.exports ={

  googlePost:(req,res) =>{
    
  },

    googleSigninControl:(req,res)=>{

//access token 얻는다

// axios.post('https://www.googleapis.com/oauth2/token',{code})
      //
console.log(GOOGLE_CLIENT_ID)
// const code= req.body.authorizationCode

//구글에서 토큰을 받아온다.  redirect주소에  

 //승인 요청앱을 생성 하여 resouce server 로부터 승인 코드를 받아온다. 이때 callbac 에 코드를주며 리다이렉트된다.
    //  res.redirect(200,`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:8080/auth/googlesignin/callback&response_type=code&scope=https://www.googleapis.com/auth/drive.metadata.readonly`)

//    axios.post('https://oauth2.googleapis.com/token',{code:code
//   ,client_id:GOOGLE_CLIENT_ID,client_secret:GOOGLE_CLIENT_SECRET,
// redirect_uri:redirectURI,grant_type:'authorization_code'} ,{headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(data =>{
//   res.status(200).send( data)
// })
     //!생성된 코드로, 사용자가 client로 진입, client 는 승인코드로 access token을 구글로부터 얻는다.

    },
        //




  signupController: (req, res) => {
    const { email, password, nickname } = req.body;
    //   파라미터로 email pass입력하지 않은경우
    if (!email || !password || !nickname) {
      return res.status(422).send({ message: "이메일, 비밀번호를 입력하세요" });
    }
    //회원가입은 email, nickname ,password를 넣는다.
    //일치하는 이메일,nickname 없을경우 db에 새로 만든다.
   user.findOrCreate({where:{email,nickname},defaults:{email,password,nickname}
   })
   .then(([data,created])=>{
       //!긴급 조치 토큰으로만 보내기
       
       //회원가입 요청성공, 토큰을 보내준다. 어디에? header? cookie?
if(created){

return res.status(201).send({accessToken:accessToken,message:'회원가입 완료'})
} 
//이미 있는경우g
else{
 res.status(400).send({message:'이미 존재하는 이메일 입니다.'})
}

   })//catch 로 에러 잡아주기



   //created 이미있는거 보내면 false, 아니면 true;
   

},




  nickCheckController: (req, res) => {
    const { nickname } = req.body;
    user
      .findOne({ where: { nickname } ,attribute:['nickname']})
      .then((data) => {
        if (!data) {
          res.status(200).send({ message: "사용가능한 닉네임 입니다." });
        }
        res.status(400).send({data:data, message: "존재하는 닉네임 입니다." });
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
        // delete data.dataValues.password;

        const accessToken = generateAccessToken(data.dataValues);
        console.log(accessToken);
        const refreshToken = generateRefreshToken(data.dataValues);
        // sendToken(res,accessToken)
        res.setHeader("authorization", accessToken);
        //! 긴급조치 토큰 쿠키로 보내기
      
        // sendAccessToken(res, accessToken);
        sendRefreshToken(res, refreshToken);

        return res
          .status(200)
          .send({accessToken:accessToken, message: "로그인 되었습니다." });
        // res.json(accessToken)
      })
      .catch((err) => {
        console.log(err);
      });
  },

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
