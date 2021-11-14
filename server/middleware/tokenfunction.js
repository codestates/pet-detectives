
// const {verify,sign} = require('jsonwebtoken')
// const { singularize } = require('sequelize/types/lib/utils')
const jwt = require("jsonwebtoken");

require('dotenv').config()

module.exports ={

//accesstoken생성
generateAccessToken: (data) =>{
   return jwt.sign(data,process.env.ACCESS_SECRET,{ expiresIn:'1h'})
}
,
generateRefreshToken:(data) =>{
    return jwt.sign(data,process.env.REFRESH_SECRET,{expiresIn:'2h'}) //expires?

},
//쿠키로 보내는경우
sendToken:(res,token) =>{
    res.cookie('token',token,{httpOnly:true,sameSite:'none',}) //secuire 은 https이용하는경우

}
//필요할때마다 생성

//검증한경우




}