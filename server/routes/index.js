const express = require("express");
const { post } = require("../models");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/intro", async (req, res, next) => {
  //intro page 할일 동물 실종수, 찾은수 구하기
  //0이false? 1이 true?
  //find 로 찾고 ,count?

  //[Op.gt]: 25 25보다큰값.,[Op.lt] : 25보다 작은값 , [Op.eq] 25인 값

  //[0p.eq] :1 count

  //찾은동물수
  try {
    const findPet = await post.count({ where: { is_found: { [Op.eq]: 1 } } });
    //못찾은동물수

    const lostPet = await post.count({ where: { is_found: { [Op.eq]: 0 } } });

    // console.log(lostPet, fi)

    return res
      .status(200)
      .send({
        data: { findPet: findPet, lostPet: lostPet },
        message: "아직 실종 상태입니다.",
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
