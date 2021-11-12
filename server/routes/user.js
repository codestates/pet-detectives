var express = require("express");
var router = express.Router();

const { usersController } = require("../controllers");

// * get /users/auth
router.get("/auth", usersController.auth.get);
// router.get("/users/auth");

// * POST /users/signin
router.get("/signin", usersController.signin.get);
// router.get("/users/signin");

// * POST /users/signout
router.get("/signout", usersController.signout.get);
// router.get("/users/signout");

// * get /users/signup
router.get("/signup", usersController.signup.get);
// router.get("/users/signup");

module.exports = router;
