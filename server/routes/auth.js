<<<<<<< HEAD
const router = require("express").Router();
const controller = require("../controllers/auth");

router.post("/signin", controller.signinController);
router.post("/signup", controller.signupController);
router.post("/googlesignin", controller.googlesigninController);

module.exports = router;
=======
const express = require('express')
const router = express.Router()
const controller =require('../controllers/auth') //controller auth.js module 객체 사용

router.post('/signup',controller.signupControl)
// 회원가입 /auth/signup
// router.post('/signin')
// 로그인 /auth/signin
// router.post('/googlesignin')
//소셜로그인(구글) /auth/googlesignin
module.exports = router
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
