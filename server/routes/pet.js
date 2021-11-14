const router = require("express").Router();
const controller = require("../controllers/pet");

router.post("/petimage", controller.petimageController);
router.post("/petregister", controller.petregisterController);
router.get("/petinfo", controller.petinfoController);
router.get("/petisfound", controller.petisfoundController);
router.patch("/petedit", controller.peteditController);
router.delete("/petdelete", controller.petdeleteController);

module.exports = router;
