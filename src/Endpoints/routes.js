const express = require("express");
const router = express.Router();
const checkAuth = require("../Middlewares/auth");
const upload = require("../Utils/upload");

const userPortfolio = require("./User/userPortfolio");
const userAction = require("./User/userAction");

// Porfolio Routes
router.post("/signup", userPortfolio.userSignup);

router.post("/signin", userPortfolio.userSignin);

router.get("/user", checkAuth, userPortfolio.userDetails);

router.patch("/user", checkAuth, userPortfolio.userUpdate);

// router.post(
//   "/image_upload",
//   checkAuth,
//   upload.single("image"),
//   userPortfolio.imageUpload
// );

router.post("/password_reset_request", userPortfolio.passwordResetRequest);

router.post("/reset_password", userPortfolio.passwordReset);

// User Action Routes

router.post("/get", userAction.get);

router.post("/sell", checkAuth, userAction.sell);

router.post("/buy", checkAuth, userAction.buy);

router.post("/history", checkAuth, userAction.history);

router.post("/getData",checkAuth , userAction.getData);

router.get("/getListData", userAction.getListData);

router.post("/getNews", checkAuth, userAction.getNews);

router.get("/stats", checkAuth, userAction.stats);

router.get("/transactions", checkAuth, userAction.transactions);

module.exports = router;
