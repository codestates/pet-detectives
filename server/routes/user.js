<<<<<<< HEAD
const router = require("express").Router();
const controller = require("../controllers/user");

router.get("/userinfo", controller.userinfoController);
router.patch("/useredit", controller.usereditController);
router.patch("/passwordedit", controller.passwordeditController);
router.delete("/withdrawal", controller.withdrawalController);
router.delete("/googlewithdraw", controller.googlewithdrawController);

module.exports = router;
=======
const express = require('express')
const router = express.Router()


// router.get('/userinfo') 
// //유저정보 조회, /user/userinfo
// router.patch('/useredit')
// // 유저정보 수정 (비번제외) /user/useredit
// router.patch('/passwordedit')
// //유저 비밀번호 수정 /user/useredit
// router.delete('/withdrawal') 
// //회원탈퇴 /user/withdrawal
// router.delete('googlewithdrawal')
// //소셜 회원탈퇴 /user/googlewithdrawal

module.exports = router
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
