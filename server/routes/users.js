const express = require('express')

const router = express.Router()

router.post('/signup')
// /users/signup
router.post('/signin')
// /users/signin
router.post('/userinfo')
// /users/userinfo
router.get('/signout')
// /users/signout
router.post('/signup')
// /users/signup
router.delete('/:userId')
// /users/:userId /regist 필요
router.patch('/:userId')
// /user/:userId /password,nickname 필요