const express = require('express')
const router = express.Router()
const controller=require('../controllers/auth') //controller auth.js module 객체 사용




router.post('/nick',controller.nickCheckControl)
router.post('/signup',controller.signupControl)
// 회원가입 /auth/signup
router.post('/signin', controller.signinControl) 
// 로그인 /auth/signin
// router.get('/signout',controller.signoutControl)
// router.get('/googlesignin',controller.googleSigninControl)
//소셜로그인(구글) /auth/googlesignin
module.exports = router
