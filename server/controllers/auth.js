




const express = require('express')
const {user,post,post_comment,hashtag} = require('../models')
const {generateAccessToken,sendAccessToken,sendRefreshToken,generateRefreshToken} = require('../middleware/tokenfunction')
const axios = require('axios')
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const redirecURI = 'http://localhost:8080/auth/googlesignin/callback'


module.exports ={


signupController: (req,res)=>{


    const {email, password,nickname} = req.body
//   파라미터로 email pass입력하지 않은경우
if(!email||!password||!nickname){
    res.status(400).send({message:'이메일, 비밀번호를 입력하세요'})
}
  //회원가입은 email, nickname ,password를 넣는다.
    //일치하는 이메일,nickname 없을경우 db에 새로 만든다.
   user.findOrCreate({where:{email,nickname},defaults:{email,password,nickname}
   })
   .then(([data,created])=>{
       console.log(created,data)
       //회원가입 요청성공, 토큰을 보내준다. 어디에? header? cookie?
if(created){



res.status(201).send({data:data.dataValues,message:'회원가입 완료'})
} 
//이미 있는경우g
else{
 res.status(400).send({message:'이미 존재하는 이메일 입니다.'})
}

   })//catch 로 에러 잡아주기



   //created 이미있는거 보내면 false, 아니면 true;
   

},


nickCheckController: (req,res ) =>{
    const {nickname} = req.body
    user.findOne({where:{nickname}}).then(data=>{
        if(!data){
            res.status(200).send({message:'사용가능한 닉네임 입니다.'})
        
        }
        res.status(400).send({message:'존재하는 닉네임 입니다.'})
    })
    .catch(err=>{
      console.log(err)
    })

},
signinController: (req,res) =>{


    const {password, email} =req.body
    
    //pas, em 입력안한경우
    if(!password||!email){
        res.status(400).send({message:'이메일, 비밀번호를 입력해주세요'})
    }
 //로그인 시 입력한 데이터와 db 일치하는지 확인, 일치 -> 로그인, 불일치 -> 로그인 x
    user.findOne({where:{email,password}}).then(data=>{

        if(!data){
            res.status(404).send({message:'존재하지 않는 회원입니다.'})
        }
//로그인 성공시 토큰 발급 access , refresh 
delete data.dataValues.password

    const accessToken = generateAccessToken(data.dataValues)
    const refreshToken = generateRefreshToken(data.dataValues)
// sendToken(res,accessToken)
// sendToken(res,refreshToken)
    res.json({data:{accessToken:accessToken,refreshToken:refreshToken},message:'로그인 되었습니다.'})
// res.json(accessToken)
    })


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
signoutContorller:(req,res) =>{
console.log(req.headers.authorization)
    res.status(205).send({message:'로그아웃 완료'})

}
//회원가입

}
