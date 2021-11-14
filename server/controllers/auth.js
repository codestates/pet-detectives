<<<<<<< HEAD
module.exports = {
  signinController: async (req, res) => {
    res.send("signin ok!");
  },
  signupController: async (req, res) => {
    res.send("signup ok!");
  },
  googlesigninController: async (req, res) => {
    res.send("googlesignin ok!");
  },
};
=======




//db가 안불러와짐.
const express = require('express')
const {user,post,post_comment,hashtag} = require('../models')
const {generateAccessToken,sendToken,generateRefreshToken} = require('../middleware/tokenfunction')

module.exports ={

//회원가입
signupControl: (req,res)=>{
    console.log(req.body)
    const {email, password,nickname} = req.body
  //파라미터로 email pass입력하지 않은경우
if(!email||!password||!nickname){
    res.status(400).send({message:'이메일, 비밀번호를 입력하세요'})
}
  //회원가입은 email, nickname ,password를 넣는다.
    //일치하는 이메일이 없을경우 db에 새로 만든다.
   user.findOrCreate({where:{email},defaults:{email,password}
   })
   .then(([data,created])=>{
       console.log(created,data)
       //회원가입 요청성공, 토큰을 보내준다. 어디에? header? cookie?
if(created){

//!토큰을 acessToken을 만들고, 쿠키로 보내는경우  

//const accessToken = generateAccessToken(data.dataValues)
//const refreshToken = generateRefreshToken(data.dataValues)
// sendToken(res,accessToken)
// res.status(200),send()

} 
//이미 있는경우g
else{

}

   })
   //created 이미있는거 보내면 false, 아니면 true;
   //존재하는경우, 존재하지 않는경우

res.status(200).send()
}


}
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
