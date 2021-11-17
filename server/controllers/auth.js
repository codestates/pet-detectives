




const express = require('express')
const {user,post,post_comment,hashtag} = require('../models')
const {generateAccessToken,authorized,sendAccessToken,sendRefreshToken,generateRefreshToken} = require('../middleware/tokenfunction')
const { default: axios } = require('axios')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const redirecURI = 'http://localhost:8080/auth/googlesignin/callback'
const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
const GOOGLE_AUTH_TOKEN_URL= "https://oauth2.googleapis.com/token"

module.exports ={

    googleSigninControl:(req,res)=>{



        axios.post('')
 //승인 요청생성 구글 로그인 어플리케이션 
       return res.redirect(200,`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&
       redirect_uri=http://localhost:8080/auth/googlesignin/callback&
   respons_type=code &scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly`)
         
        
        
        },


signupController: (req,res)=>{


    const {email, password,nickname} = req.body
//   파라미터로 email pass입력하지 않은경우
if(!email||!password||!nickname){
    res.status(422).send({message:'이메일, 비밀번호를 입력하세요'})
}
  //회원가입은 email, nickname ,password를 넣는다.
    //일치하는 이메일,nickname 없을경우 db에 새로 만든다.
   user.findOrCreate({where:{email,nickname},defaults:{email,password,nickname}
   })
   .then(([data,created])=>{
       //!긴급 조치 토큰으로만 보내기
       
       //회원가입 요청성공, 토큰을 보내준다. 어디에? header? cookie?
if(created){
   
    const accessToken = generateAccessToken(data.dataValues)
    const refreshToken = generateRefreshToken(data.dataValues)
    sendRefreshToken(res,refreshToken)
    console.log(created,data)

res.status(201).send({data:data.dataValues,accessToken:accessToken,message:'회원가입 완료'})
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

    const accessToken = generateAccessToken(data.dataValues)
    console.log(accessToken)
    const refreshToken = generateRefreshToken(data.dataValues)
// sendToken(res,accessToken)
res.setHeader('authorization', accessToken);
//! 긴급조치 토큰 쿠키로 보내기
delete data.dataValues.password
sendAccessToken(res,accessToken)
sendRefreshToken(res,refreshToken)

   return res.status(200).send({ accessToken ,message:'로그인 되었습니다.'})
// res.json(accessToken)
    }).catch(err=>{
        console.log(err)
    })


},


signoutContorller:async(req,res) =>{

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
const cookie = req.cookies.access
// const accessTokenData = authorized(cookie)
res.cookie('access',cookie,{httpOnly:true,sameSite:'none',maxAge:0.5})



   return res.status(205).send({message:'로그아웃 완료}'})
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

}
