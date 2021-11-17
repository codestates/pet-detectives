const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.get('/userinfo',controller.userinfoController) 
//유저정보 조회, /user/userinfo
router.patch('/useredit',controller.usereditController)
// 유저정보 수정 (비번제외) /user/useredit
router.patch('/passwordedit',controller.passwordeditController)
//유저 비밀번호 수정 /user/useredit
router.delete('/withdrawal',controller.withdrawalController) 
//회원탈퇴 /user/withdrawal
router.delete('googlewithdrawal')
//소셜 회원탈퇴 /user/googlewithdrawal

module.exports = router
