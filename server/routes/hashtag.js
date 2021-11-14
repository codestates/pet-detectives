<<<<<<< HEAD
const router = require("express").Router();
const controller = require("../controllers/hashtag");

router.get("/hashtaginfo", controller.hashtaginfoController);
router.post("/hashtagregister", controller.hashtagregisterController);
router.patch("/hashtagedit", controller.hashtageditController);
router.delete("/hashtagdelete", controller.hashtagdeleteController);

module.exports = router;
=======
const express = require('express')
const router = express.Router()
// router.post('/hashtagregister')
// 해쉬태그 등록 /hashtag/hashtagregister
// router.get('/hashtaginfo')
// 해쉬태그 조회 /hashtag/hashtaginfo
// router.patch('/hashtagedit')
// 해쉬태그 수정 /hashtag/hashtagedit
// router.delete('hashtagdelete')
// 해쉬태그 삭제 /hashtag/hashtagdelete
module.exports = router
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
