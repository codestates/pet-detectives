const express = require("express");
const { user, post, post_comment, hashtag } = require("../models");
const {
  generateAccessToken,
  sendToken,
  generateRefreshToken,
  authorized,
} = require("../middleware/tokenfunction");
const jwt = require("jsonwebtoken");

// let pageNum = req.query.page; // 요청 페이지 넘버
// let offset = 0;

module.exports = {
  //   petimageController: async (req, res) => {
  // //user와 post를 찾아서 그림을 edit

  // const{image} = req.body

  //  post.create({image:image}).then(data=>{
  //    if(!data){
  // return res.status(400).send({message:'그림을 올려주세요'})
  //    }
  //    return res.status(200).send({data:{image:image},message:'완료'})

  //  })

  //   },
  petregisterController: async (req, res) => {
    //회원 가입한 회원의 email - id
    // console.log(req.headers.authorization,req.cookies)

    const {
      image,
      description,
      pet_name,
      pet_sex,
      pet_age,
      pet_category,
      pet_lost_region,
      pet_lost_date,
      is_found,
    } = req.body;

    if (
      !image ||
      !description ||
      !pet_name ||
      !pet_sex ||
      !pet_category ||
      !pet_lost_region ||
      !pet_lost_date ||
      !pet_age
    ) {
      return res.status(404).send({ message: "펫 정보를 모두 입력해주세요" });
    }
    //verify ?  검증을 통해 데이터를 넘겨준다?
    // authorized(req.header.authorization[1])
    //사용자의 email이 들어간 db

    // const cookie = req.cookie.accessToken
    // console.log(cookie)
    // authorized(req,cookie)

    // const{image} = req.body

    //   },

    // if (!userId) {
    //   return res.status(403).send({ messagee: "로그인후 이용해 주세요" });
    // }

    const petReigster = await post.create({
      image: image,
      user_id: userId.dataValues.id,
      description: description,
      pet_name: pet_name,
      pet_sex: pet_sex,
      pet_age: pet_age,
      pet_category: pet_category,
      pet_lost_date: pet_lost_date,
      pet_lost_region: pet_lost_region,
      is_found: is_found,
    });

    return res
      .status(200)
      .send({ data: petReigster, message: "펫이 등록되었습니다" });

    //펫 등록, 사용자는 여러개의 post를 올릴 수 있다.

    // res.send("petregister ok!");
  },

  petinfoController: async (req, res) => {
    console.log(req.headers);
    const searchPet = await post.findAll();

    return res.json({ data: searchPet, message: "펫 정보 조회" });
  },

  petisfoundController: async (req, res) => {
    const { is_found, email } = req.body;
    console.log(is_found);
    const foundPet = await user.findOne({ where: { email } });

    post.update({ is_found: true }, { where: { is_found: foundPet.id } });
    //found 를 update 해서 false=> true

    return res.json({ message: "펫을 찾았다" });
  },

  petdeleteController: async (req, res) => {
    const { id, email } = req.body;
    // console.log(user_id,id)

    const deletePet = user.findOne({ where: email });

    post.destroy({ where: { user_id: deletePet.id, id } }).then((data) => {
      console.log(data);
      return res.status(200).send({ message: "펫 삭제" });
    });
  },

  peteditController: async (req, res) => {
    const {
      image,
      description,
      pet_name,
      pet_sex,
      pet_age,
      pet_category,
      pet_lost_region,
      pet_lost_date,
      is_found,
      email,
    } = req.body;

    const petEdit = user.findOne({ where: { email } });

    post.update(
      {
        image: image,
        description: description,
        pet_name: pet_name,
        pet_sex: pet_sex,
        pet_age: pet_age,
        pet_category: pet_category,
        pet_lost_region: pet_lost_region,
        pet_lost_date: pet_lost_date,
        is_found: is_found,
      },
      { where: { user_id: petEdit.id } }
    );

    return res.status(200).send({ message: "펫 정보가 수정되었습니다." });

    // post.update({})
  },
};
