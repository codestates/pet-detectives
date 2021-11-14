const router = require("express").Router();
const controller = require("../controllers/hashtag");

router.get("/hashtaginfo", controller.hashtaginfoController);
router.post("/hashtagregister", controller.hashtagregisterController);
router.patch("/hashtagedit", controller.hashtageditController);
router.delete("/hashtagdelete", controller.hashtagdeleteController);

module.exports = router;
