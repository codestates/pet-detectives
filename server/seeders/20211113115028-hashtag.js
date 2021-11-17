'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[{

      name:'#서울',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name:'#대구',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name:'#대전',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name:'#서면',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name:'#경기도',
     
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name:'#전라도',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'#거제도',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },

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
     let datas = [];
     for(let i = 1; i < 19 ; i++) {
      let tag= "";
      if(i % 18 === 1) { tag = "검은 점"}
      if(i % 18 === 2) { tag = "큰 눈"}
      if(i % 18 === 3) { tag = "배 상처"}
      if(i % 18 === 4) { tag = "아기"}
      if(i % 18 === 5) { tag = "황금색"}
      if(i % 18 === 6) { tag = "갈색"}
      if(i % 18 === 7) { tag = "다리 상처"}
      if(i % 18 === 8) { tag = "반점"}
      if(i % 18 === 9) { tag = "검은 점"}
      if(i % 18 === 10) { tag = "푸들"}
      if(i % 18 === 11) { tag = "동네"}
      if(i % 18 === 12) { tag = "사상구"}
      if(i % 18 === 13) { tag = "강남"}
      if(i % 18 === 14) { tag = "바닷가"}
      if(i % 18 === 15) { tag = "발바닥"}
      if(i % 18 === 16) { tag = "전화"}
      if(i % 18 === 17) { tag = "다리 밑"}

       let obj = {
         name: tag,
         createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
         updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
       }
       datas.push(obj)
     }
     

     return queryInterface.bulkInsert('hashtags', datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hashtags');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('hashtags',null,{})
  }
};
