const express = require('express')
const router = express.Router()
const controller = require('../controllers/hashtag')
router.post('/hashtagregister',controller.hashtagregisterController)
// 해쉬태그 등록 /hashtag/hashtagregister
// router.get('/hashtaginfo')
// 해쉬태그 조회 /hashtag/hashtaginfo
// router.patch('/hashtagedit',)
// 해쉬태그 수정 /hashtag/hashtagedit
// router.delete('hashtagdelete')
// 해쉬태그 삭제 /hashtag/hashtagdelete
module.exports = router
