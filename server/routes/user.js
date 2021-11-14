const router = require("express").Router();
const controller = require("../controllers/user");

router.get("/userinfo", controller.userinfoController);
router.patch("/useredit", controller.usereditController);
router.patch("/passwordedit", controller.passwordeditController);
router.delete("/withdrawal", controller.withdrawalController);
router.delete("/googlewithdraw", controller.googlewithdrawController);

module.exports = router;
