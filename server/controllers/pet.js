const express = require('express')
const {user,post,post_comment,hashtag} = require('../models')
const {generateAccessToken,sendToken,generateRefreshToken,authorized} = require('../middleware/tokenfunction')
const jwt = require('jsonwebtoken');


module.exports = {
  petimageController: async (req, res) => {
const{image} = req.body

 post.create({image:image}).then(data=>{
   if(!data){
res.status(400).send({message:'그림을 올려주세요'})
   }
   res.status(200).send({data:{image:image},message:'완료'})
   

 })
 
  },
  petregisterController: async  (req, res) => {
    //회원 가입한 회원의 email - id
const{image,description,pet_name,pet_sex,pet_age,pet_category,pet_lost_region,pet_lost_date,is_found,email} =req.body


//verify ?  검증을 통해 데이터를 넘겨준다?
// authorized(req.header.authorization)
 //사용자의 email이 들어간 db
 const userId =await user.findOne({where:{email}})
// const cookie = req.cookie.accessToken
// console.log(cookie)
// authorized(req,cookie)


if(!userId){
  res.status(403).send({messagee:'로그인후 이용해 주세요'})
}

 const petReigster = await post.create({image:image,user_id:userId.dataValues.id,description:description,pet_name:pet_name,pet_sex:pet_sex,pet_age:pet_age,pet_category:pet_category,
  pet_lost_date:pet_lost_date,pet_lost_region:pet_lost_region,is_found:is_found})
    
      res.status(200).send({data:petReigster,message:'펫이 등록되었습니다'})


//펫 등록, 사용자는 여러개의 post를 올릴 수 있다.

    // res.send("petregister ok!");
    


  },
  petinfoController:  async (req, res) => {
    res.send('asds')
    // const {pet_lost_region,user_id} =req.body
    // console.log(pet_lost_region,user_id)
  //  post.findAll()
  //  .then(data=>{
  //    console.log(data)
  //  })
  
    //1. 모두보여준다.
    // post.findAll().then(data=>{
    // console.log(data)
    // })
    //2. 지역별로 보여준다.
    //3. hashtag 검색에 의해 보여준다.
    // res.send("petinfo ok!");
  },
  petisfoundController: async (req, res) => {
    res.send('asd')
    const{is_found,email} =req.body
    console.log(is_found)
    const foundPet = await user.findOne({where:{email}})

    post.update({is_found:true},{where:{is_found:foundPet.id}})
    //found 를 update 해서 false=> true
 
    // res.send("petisfound ok!");
  },
  petdeleteController: async (req, res) => {
const{id} = req.body
// console.log(user_id,id)

const deletePet = user.findOne({where:email})

    post.destroy({where:{user_id:deletePet.id,id}}).then(data=>{
      console.log(data)
      res.status(200).send('펫 삭제')
    })
  },


  peteditController:  (req, res) => {
    const{image,description,pet_name,pet_sex,pet_age,pet_category,pet_lost_region,pet_lost_date,is_found,email} =req.body

    // post.update({})
  },

  }

