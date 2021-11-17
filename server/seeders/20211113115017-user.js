'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let datas = [];
    for(let i = 1; i < 11 ; i++) {
      let obj = {
        nickname:"닉네임"+i,
        email:"아이디"+i+"@naver.com",
        password:123+i,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
      datas.push(obj)
    }

    return queryInterface.bulkInsert('users', datas, {});
    
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users',null,{})
  }
};
