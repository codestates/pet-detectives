const express = require('express')
const router = express.Router()
const controller = require('../controllers/pet')

// router.post('/petimage')
// //펫 사진 등록 /pet/petimage
router.post('/petregister',controller.petregisterController)
// 펫 정보 등록 /pet/petregister
router.get('/petinfo',controller.petinfoController)
// 펫 조회 /pet/petinfo
router.patch('/petedit',controller.peteditController)
// 펫 정보 수정 /pet/petedit
router.delete('/petdelete',controller.petdeleteController)
// 펫 삭제 /pet/petdelete
// router.patch('/petfound',controller.petisfoundController)
module.exports = router
