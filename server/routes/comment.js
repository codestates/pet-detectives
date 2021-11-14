const router = require("express").Router();
const controller = require("../controllers/comment");

router.get("/commentinfo", controller.commentinfoController);
router.post("/commentregister", controller.commentregisterController);
router.patch("/commentedit", controller.commenteditController);
router.delete("/commentdelete", controller.commentdeleteController);

module.exports = router;
