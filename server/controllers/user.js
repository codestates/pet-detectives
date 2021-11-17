const express = require("express");
const { user, post, post_comment, hashtag } = require("../models");
const {
  generateAccessToken,
  authorized,
  sendRefreshToken,
  generateRefreshToken,
  sendAccessToken,
} = require("../middleware/tokenfunction");
const axios = require("axios");

//!header 로 accesstoken못받아서 임시로 쿠키로 access만 보내서 작업 ( 추후 수정항 생길시 수정)
module.exports = {
  userinfoController: async (req, res) => {
    // console.log(req.cookies.access)
    const token = req.headers.token; //!헤더로 토큰 받은경우
    // const cookie = req.cookies.access

    // if(!cookie){
    //   return res.status(401).send({ message: 'not authorized' });
    // }

    if (!token) {
      return res.status(401).send({ message: "not authorized" }); //! 헤더로 토큰 받은경우
    }
    // const accessTokenData = authorized(cookie)

    const accessTokenData = authorized(token); //! 헤더로 토큰 받은경우

    console.log(accessTokenData);
    if (!accessTokenData) {
      return res
        .status(401)
        .send({ messagea: "인증정보가 올바르지 않습니다." });
    }

    user.findOne({ where: { email: accessTokenData.email } }).then((user) => {
      post
        .findAll({
          where: { user_id: user.dataValues.id },
          Attributes: [
            "pet_name",
            "pet_lost_date",
            "pet_lost_region",
            "description",
            "pet_age",
          ],
        })
        .then((pet) => {
          return res
            .status(200)
            .send({ user: user.dataValues, pet: pet.dataValues });
        });
    });
  },
  usereditController: async (req, res) => {
    const { newNickName } = req.body;
    // const cookie = req.cookies.access

    // const accessTokenData = authorized(cookie)

    const token = req.headers.token; //!헤더로 토큰 받은경우

    const accessTokenData = authorized(token); //! 헤더로 토큰 받은경우
    console.log(accessTokenData);

    user
      .update(
        { nickname: newNickName },
        { where: { email: accessTokenData.email } }
      )
      .then((data) => {
        return res
          .status(200)
          .send({ data: data, message: "닉네임이 변경되었습니다." });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  passwordeditController: async (req, res) => {
    const { newPassword } = req.body;
    // const cookie = req.cookies.access

    // const accessTokenData = authorized(cookie)

    const token = req.headers.token; //!헤더로 토큰 받은경우

    const accessTokenData = authorized(token); //! 헤더로 토큰 받은경우

    console.log(accessTokenData);

    //새비밀번호와 현재 비밀번호가 존재 ,
    user
      .update(
        { password: newPassword },
        { where: { email: accessTokenData.email } }
      )
      .then((data) => {
        return res
          .status(200)
          .send({ data: data, messagea: "비밀번호가 변경되었습니다." });
      })
      .catch((err) => {
        console.log(err);
      });

    //만약에 닉네임을 바꿀때 비밀번호 정보가없어도 로그인이 되어야한다.
    //닉네임 변경시 비밀번호 정보가 있어도 로그인이 되어야한다.

    //새비밀번호 입력되면
  },
  withdrawalController: async (req, res) => {
    // const cookie = req.cookies.access
    // const accessTokenData = authorized(cookie)

    const cookie = req.cookies.refresh; //!헤더로 토큰받은경우 refresh 는 쿠키에 담는다
    // const refreshTokenData = authorized(cookie)

    const token = req.headers.token; //!헤더로 토큰 받은경우

    const accessTokenData = authorized(token); //! 헤더로 토큰 받은경우
    console.log(accessTokenData);
    //정보가 없다면 삭제 x
    if (!accessTokenData) {
      return res.status(403).send({
        message: "존재하지 않는 유저 이거나, 이미 탈퇴된 유저 입니다.",
      });
    }
    //유저정보삭제
    user.destroy({ where: { email: accessTokenData.email } }).then((data) => {
      //쿠키삭제

      res.cookie("refresh", cookie, {
        httpOnly: true,
        sameSite: "none",
        maxAge: 1,
      });
      return res.status(200).send({ messagae: "탈퇴가 완료 되었습니다." });
    });
  },
  googlewithdrawController: async (req, res) => {},
};
