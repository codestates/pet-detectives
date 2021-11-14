
const router = require("express").Router();
const controller = require("../controllers/intro");

router.get("/", controller.introController);

module.exports = router;
