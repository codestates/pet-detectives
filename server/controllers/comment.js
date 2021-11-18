const express = require("express");
const { user, post, post_comment, hashtag } = require("../models");
const {
  generateAccessToken,
  authorized,
  sendRefreshToken,
  generateRefreshToken,
} = require("../middleware/tokenfunction");

module.exports = {
  commentinfoController: async (req, res) => {
    //email이 없어도 이용 가능해야함.
    // if(!email){
    // const postComment = await post.findOne({where:{user_id}})
    // post_comment.findAll({attributes:['comment']}).then(data=>{

    //   if(!data){
    //     return res.status(400).send({message:'댓글이 없습니다.'})
    //   }
    //   res.status(200).send({data,message:'비회원 댓글'})
    // })

    // }
    post_comment
      .findAll({ attributes: ["comment"] })
      .then((data) => {
        if (!data) {
          return res.status(400).sedn({ message: "댓글이 없습니다." });
        }
<<<<<<< HEAD
        return res.status(200).send({ data, message: "댓글" });
=======
        return res.status(200).send({ data: data, message: "댓글" });
>>>>>>> d485b0fffa523022adbd9dc63f073a9bc67e4a5f
      })
      .catch((err) => {
        console.log(err);
      });
  },
  commentregisterController: async (req, res) => {
<<<<<<< HEAD
    const { email, user_id, id, comment } = req.body;
    if (!email) {
      return res.status(404).send({ messagae: "이용 할 수 없습니다." });
    } else {
      const userComment = await user.findOne({ where: { email } });
      console.log(userComment.id);
      const postComment = await post.findOne({ where: { user_id } });

      // console.log(userComment)
      // console.log(postComment)

      //코멘트를 등록한다 post 에 댓글을 달아야함.
      //post_id , user_id를 고려해서 생성되어야함.

      try {
        if (!userComment.email) {
          return res.status(404).send({ messagae: "이용 할 수 없습니다." });
        }

        post_comment
          .create({
            user_id: userComment.id,
            post_id: postComment.id,
            comment: comment,
          })
          .then((data) => {
            return res.status(200).send({ data, message: "댓글 이 달렸다." });
          });
      } catch (err) {
        console.log(err);
      }
    }
=======
    const authorization = req.headers.authorization;
    console.log(authorization);
    if (!authorization) {
      return res.status(401).send({ message: "권한이 없습니다." });
    }



    const { comment, id } = req.body;

   
    const accessTokenData = authorized(authorization);
    if(!comment||!id||!accessTokenData.email){
      return res.status(400).send({message:'댓글을 달아주세요'})
    }

    const userComment = await user.findOne({
      where: { email: accessTokenData.email },
    }); // id, emial pas, nick
    // console.log(userComment.id);
console.log(id,userComment.id)
    const postComment = await post.findOne({
      where: { user_id: userComment.id, id: id },
    });

 console.log(postComment)
    //post 1 2 3 4 5 6 .. user_id =1

    //post cooment user_id , post_id  1 1 1번 유저가 포스트를 2개  1 2 ,  user_id =1

    try {
      post_comment
        .create({
          user_id: userComment.id,
          post_id: postComment.id,
          comment: comment,
        })
        .then((data) => {
          return res.status(200).send({ data, message: "댓글 이 달렸다." });
        });
    } catch (err) {
      console.log(err);
    }
>>>>>>> d485b0fffa523022adbd9dc63f073a9bc67e4a5f

    // res.send("commentregister ok!");
  },
  commenteditController: async (req, res) => {
<<<<<<< HEAD
    const { email, user_id, id, comment } = req.body;

    if (!email) {
      return res.status(404).send({ messagae: "이용 할 수 없습니다." });
    } else {
      const userComment = await user.findOne({ where: { email } });
      console.log(userComment.id);
      const postComment = await post.findOne({ where: { user_id } });

      post_comment
        .patch({
          where: { user_id: userComment.id, post_id: postComment.id },
          attributes: ["comment"],
        })
        .then((data) => {
          if (!data) {
            return res.status(400).sedn({ message: "댓글이 없습니다." });
          }
          return res.status(200).send({ data, message: "댓글" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  commentdeleteController: async (req, res) => {
    const { email, user_id, id, comment } = req.body;

    if (!email) {
      return res.status(404).send({ messagae: "이용 할 수 없습니다." });
    } else {
      const userComment = await user.findOne({ where: { email } });
      console.log(userComment.id);
      const postComment = await post.findOne({ where: { user_id } });

      post_comment
        .destroy({
          where: { user_id: userComment.id, post_id: postComment.id },
        })
        .then((data) => {
          if (!data) {
            return res
              .status(400)
              .send({ message: "삭제되었거나, 없는 댓글 입니다." });
          }
          return res
            .status(200)
            .send({ data, message: "댓글이 삭제되었습니다." });
        })
        .catch((err) => {
          console.log(err);
        });
    }
=======
    const token = req.headers.token;

    if (!token) {
      return res.status(401).send({ message: "권한이 없습니다." });
    }

    const { newCommnent, id } = req.body;

    const accessTokenData = authorized(token);

    const userComment = await user.findOne({
      where: { email: accessTokenData.email },
    });
    console.log(userComment.id);
    const postComment = await post.findOne({   where: { user_id: userComment.id, id: id }, });

    post_comment
      .update(
        { comment: newCommnent },
        { where: { user_id: userComment.id, post_id: postComment.id } }
      )
      .then((data) => {
        if (!data) {
          return res
            .status(400)
            .sedn({ message: "댓글이 없거나, 이미 수정되었습니다." });
        }
        return res
          .status(200)
          .send({ data, message: "댓글이 수정되었습니다." });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  commentdeleteController: async (req, res) => {
    const token = req.headers.token;

    if (!token) {
      return res.status(401).send({ message: "권한이 없습니다." });
    }

    const { id, comment } = req.body;

    const accessTokenData = authorized(token);

    const userComment = await user.findOne({
      where: { email: accessTokenData.email },
    });
    console.log(userComment.id);
    const postComment = await post.findOne({  where: { user_id: userComment.id, id: id }, });

    post_comment
      .destroy({ where: { user_id: userComment.id, post_id: postComment.id } })
      .then((data) => {
        if (!data) {
          return res
            .status(400)
            .send({ message: "삭제되었거나, 없는 댓글 입니다." });
        }
        return res
          .status(200)
          .send({ data, message: "댓글이 삭제되었습니다." });
      })
      .catch((err) => {
        console.log(err);
      });
>>>>>>> d485b0fffa523022adbd9dc63f073a9bc67e4a5f
  },
};
