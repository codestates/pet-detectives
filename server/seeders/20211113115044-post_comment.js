'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post_comments',[{
      user_id:1,
      post_id:1,
      comment:'어 어제봤어',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      user_id:2,
      post_id:1,
      comment:'우리 집에 있어',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ,
  {
    user_id:3,
    post_id:2,
    comment:'^^',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ,
  {
    user_id:4,
    post_id:3,
    comment:'우리 고양이좀 찾아주세요',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ,
  {
    user_id:5,
    post_id:4,
    comment:'아모르파~티',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ,
  {
    user_id:6,
    post_id:5,
    comment:'아리랑~아리랑~',
    createdAt: new Date(),
    updatedAt: new Date()
  } ,
  {
    user_id:1,
    post_id:6,
    comment:'투투',
    createdAt: new Date(),
    updatedAt: new Date()
  } ,
  {
    user_id:2,
    post_id:7,
    comment:'안~년 그대로 걸어가',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ,
  {
    user_id:3,
    post_id:8,
    comment:'그만 찾아도돼요',
    createdAt: new Date(),
    updatedAt: new Date()
  }




  
  
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('post_comments');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
