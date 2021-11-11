require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const controllers = require("./controllers/intro");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 추가적인 보안기능! true => qs 모듈 설치 필요
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS"],
  })
);

app.use(cookieParser());
app.get("/", function (req, res) {
  res.send("<h1> server!!!</h1>");
});
app.get("/intro", controllers);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`      🚀 Server is starting on ${PORT}`);
});

module.exports = app;
