<<<<<<< HEAD
const router = require("express").Router();
const controller = require("../controllers/pet");

router.post("/petimage", controller.petimageController);
router.post("/petregister", controller.petregisterController);
router.get("/petinfo", controller.petinfoController);
router.get("/petisfound", controller.petisfoundController);
router.patch("/petedit", controller.peteditController);
router.delete("/petdelete", controller.petdeleteController);

module.exports = router;
=======
const express = require('express')
const router = express.Router()

// router.post('/petimage')
// //펫 사진 등록 /pet/petimage
// router.post('/petregister')
// // 펫 정보 등록 /pet/petregister
// router.get('/petinfo')
// // 펫 조회 /pet/petinfo
// router.patch('/petedit')
// // 펫 정보 수정 /pet/petedit
// router.delete('petdelete')
// //펫 삭제 /pet/petdelete
module.exports = router
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
