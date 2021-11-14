require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const introRouter = require("./routes/intro");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const petRouter = require("./routes/pet");
const hashtagRouter = require("./routes/hashtag");
const commentRouter = require("./routes/comment");

//use modules
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 추가적인 보안기능! true => qs 모듈 설치 필요
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());

//routes
app.use("/", indexRouter);
app.use("/intro", introRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/pet", petRouter);
app.use("/hashtag", hashtagRouter);
app.use("/comment", commentRouter);

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`      🚀 Server is starting on ${PORT}`);
});

module.exports = app;
