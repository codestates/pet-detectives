const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).send("메인페이지 서버온!");
});

module.exports = router;
