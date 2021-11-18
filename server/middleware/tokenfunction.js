// const {verify,sign} = require('jsonwebtoken')
// const { singularize } = require('sequelize/types/lib/utils')
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  //토큰은권한부여 -> authenti , authrization
  //accesstoken생성
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: "10h" });
  },
  generateRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" }); //expires?
  },
  //쿠키로 보내는경우
  sendAccessToken: (res, token) => {
    res.cookie("access", token, { httpOnly: true }); //secuire 은 https이용하는경우
  },
  sendRefreshToken: (res, token) => {
    res.cookie("refresh", token, { httpOnly: true }); //secuire 은 https이용하는경우
  },
  authorized: (token) => {
    return jwt.verify(token, process.env.ACCESS_SECRET);
  },

  //필요할때마다 생성

  //검증한경우
};
