const express = require('express')
const router = express.Router()
const controller=require('../controllers/auth') //controller auth.js module 객체 사용



// router.post('/post',controller.googlePost)
router.post('/nick',controller.nickCheckController)
router.get('/signout',controller.signoutContorller)
router.post('/signup',controller.signupController)
// 회원가입 /auth/signup
router.post('/signin', controller.signinController) 
// 로그인 /auth/signin
// router.get('/newtoken',controller.newTokenController)
module.exports = router
