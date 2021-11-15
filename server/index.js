require("dotenv").config();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

// require('./models')
// const sequelize = require('./models').sequelize
// sequelize.sync()

// route를 불러온다 app.use에 연결
// const introRouter = require("./routes/intro");
const authRouter = require("./routes/auth");
// const petRouter = require("./routes/pet");
// const hashtagRouter = require("./routes/hashtag");
// const userRouter = require("./routes/user");

app.use(express.json()); //json request body 파싱하기
app.use(express.urlencoded({ extended: false })); // qs모듈로 추가적인 보안기능 모듈로서 필요하다면 모듈 설치후 사용한다.
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"], // 허락하고자하는 요청 주소
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"], // 허락하고자 하는 method
  })
);
//미들웨어 구성 /user, /pet , /search , /google, 루트와 연결

app.use("/auth", authRouter);
// app.use("/", introRouter);
// app.use("/user", userRouter);
// app.use("/pet", petRouter);
// app.use("/hashtag", hashtagRouter);

//routes

// app.use("/", indexRouter);
// app.use("/intro", introRouter);
// app.use("/user", userRouter);
// app.use("/pet", petRouter);
// app.use("/hashtag", hashtagRouter);
// app.use("/comment", commentRouter);

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`      🚀 Server is starting on ${PORT}`);
});
module.exports = app;
