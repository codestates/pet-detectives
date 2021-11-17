
const express = require('express')
const {user,post,post_comment,hashtag} = require('../models')
const {generateAccessToken,authorized,sendRefreshToken,generateRefreshToken} = require('../middleware/tokenfunction')

module.exports = {


  hashtaginfoController: async (req, res) => {
    res.send("hashtaginfo ok!");
  },


  hashtagregisterController: async (req, res) => {



    
 



























        //해쉬태그 생성, 검색 가능하게한다.

// 해쉬태그를 등록하고 모든 포스트에 모든 해쉬태그가 나오도록 해야함
//해쉬태그에 postid,(djEJs post에 해쉬태그가 있는가.) 해쉬태그에 hashtagid
// postId => post:id .hashtagId -> hashtag:id

// const {name,id }=req.body
  //  const postTag =  post.findAll({where:{id:id}})

  //main page에서 모든 hashtag가 보이도록 hashtag생성
  //hashtag리스트가 생성이된다.

  //비회원 회원
   
//hashtag검색하는 경우
// if()
//    const getInfo =  hashtag.findAll({where:{name}})

    //검색 hasth tag정보를 입력 하는경우
    // if(hashtagId){

    // }
  },
  hashtageditController: async (req, res) => {
    res.send("hashtagedit ok!");
  },
  hashtagdeleteController: async (req, res) => {
    res.send("hashtagdelete ok!");
  },
};
