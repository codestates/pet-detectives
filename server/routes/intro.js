<<<<<<< HEAD
const router = require("express").Router();
const controller = require("../controllers/intro");

router.get("/", controller.introController);

module.exports = router;
=======
const express = require('express')

const router = express.Router()

// const controller = require('../controller')


// router.get('/intro',controller.intro)
module.exports = router
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
