const express = require("express");
const { user, post, post_comment, hashtag } = require("../models");
const {
  generateAccessToken,

  generateRefreshToken,
  authorized,
} = require("../middleware/tokenfunction");


// let pageNum = req.query.page; // 요청 페이지 넘버
// let offset = 0;

module.exports = {


  petregisterController: async (req, res) => {
    //회원 가입한 회원의 email - id
    // console.log(req.headers.authorization,req.cookies)
    const token = req.headers.authorization
    console.log('token',req.headers.authorization)
    console.log('req.body',req.body)


    if(!token){
      return res.status(401).send({message:'권한이 없습니다.'})
    }

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


const accessTokenData = authorized(token)
const findUser = await user.findOne({where:{email:accessTokenData.email}})


if(!req.body.image||!req.body.description||!req.body.pet_name||!req.body.pet_sex||!req.body.pet_category||!req.body.pet_lost_region||!req.body.pet_lost_date||!req.body.pet_age){
return res.status(404).send({message:'펫 정보를 모두 입력해주세요'})
}
    const petReigster = await post.create({
      image: req.body.image,
      // user_id: userId.id,
      description: req.body.description,
      pet_name: req.body.pet_name,
      pet_sex: req.body.pet_sex,
      pet_age: req.body.pet_age,
      pet_category: req.body.pet_category,
      pet_lost_date: req.body.pet_lost_date,
      pet_lost_region: req.body.pet_lost_region,
      is_found: req.body.is_found,
    });
    
    return res
      .status(200)
      .send({ data: petReigster, message: "펫이 등록되었습니다" });

    //펫 등록, 사용자는 여러개의 post를 올릴 수 있다.

    // res.send("petregister ok!");
  },

  petinfoController: async (req, res) => {

  
    const searchPet = await post.findAll({});

    if(!searchPet){
      return res.status(400).send({message: "등록된 폣이없습니다" });
    }

    return res.json({ data: searchPet, message: "펫 정보 조회" });
  },


  // petisfoundController: async (req, res) => {
  //   const { is_found, email } = req.body;
  //   console.log(is_found);
  //   const foundPet = await user.findOne({ where: { email } });

  //   post.update({ is_found: true }, { where: { is_found: foundPet.id } });
  //   //found 를 update 해서 false=> true

  //   return res.json({ message: "펫을 찾았다" });

// },


  petdeleteController: async (req, res) => {

    const token = req.headers.authorization

    if(!token){
      return res.status(401).send({message:'권한이 없습니다.'})
    }

    const accessTokenData = authorized(token)

    const deletePet = await user.findOne({where:{email:accessTokenData.email}})
console.log(deletePet)

const delPet = await post.findOne({where: {id:req.body.id}}).then(data=>{

})

console.log(delPet)
if(delPet===undefined){
  return res.status(400).send({message:'펫이 삭제되었거나 존재하지 않는다'})
}

    post.destroy({ where: {id:req.body.id,user_id: deletePet.id,} }).then((data) => {
      console.log(data);
      return res.status(200).send({message: "펫 삭제" });
    });

  },

  peteditController: async (req, res) => {




    const token = req.headers.authorization

    if(!token){
      return res.status(401).send({message:'권한이 없습니다.'})
    }

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

    const accessTokenData = authorized(token)

    const editPet = await user.findOne({where:{email:accessTokenData.email}})

   

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
      { where: { user_id: editPet.id } }




    ).then(data=>{
     

      return res.status(200).send({ message: "펫 정보가 수정되었습니다." });

    })

    

    // post.update({})
  },
};