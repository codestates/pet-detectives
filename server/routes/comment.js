const express = require("express");
const router = express.Router();
const controller = require("../controllers/comment"); //controller auth.js module 객체 사용

router.post("/commentregister", controller.commentregisterController);
// 댓글 등록 /comment/commentregister
router.get("/commentinfo", controller.commentinfoController);
// 댓글 조회 /comment/commentinfo
router.patch("/commentedit", controller.commenteditController);
// 댓글 수정 /comment/commentedit
router.delete("/commentdelete", controller.commentdeleteController);
// 댓글 삭제 /comment/commentdelete
module.exports = router;
