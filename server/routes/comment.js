<<<<<<< HEAD
const router = require("express").Router();
const controller = require("../controllers/comment");

router.get("/commentinfo", controller.commentinfoController);
router.post("/commentregister", controller.commentregisterController);
router.patch("/commentedit", controller.commenteditController);
router.delete("/commentdelete", controller.commentdeleteController);

module.exports = router;
=======
const express = require('express')
const router = express.Router()

// router.post('/commentregister')
// 댓글 등록 /comment/commentregister
// router.get('/commentinfo')
//댓글 조회 /comment/commentinfo
// router.patch('/commentedit')
// 댓글 수정 /comment/commentedit
// router.delete('commentdelete')
//댓글 삭제 /comment/commentdelete
module.exports = router
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
