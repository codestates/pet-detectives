var express = require("express");
var router = express.Router();

const { petsController } = require("../controllers");

// * get /pets/petinfo
// router.get("/pets/petinfo");
router.get("/petinfo", petsController.petinfo.get);

// * POST /pets/changepet
// router.get("/pets/changepet");
router.get("/changepet", petsController.changepet.get);

module.exports = router;
