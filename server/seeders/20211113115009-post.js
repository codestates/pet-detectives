'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('posts',[{

    let datas = [];
    for(let i = 1; i < 40 ; i++) {
      let region = i % 18
      let boolean = i % 2 === 0

      let foundornot

      if(boolean) {
        foundornot = " 찾았다!!"
      } else {
        foundornot = " 못 찾았어..."
      }
      
  
      let obj = {
        image:"강쥐"+i+".jpg",
        description:"이 강아지를 찾았을까요...? -> " + foundornot,
        pet_name:"강쥐"+i,
        pet_sex:"남",
        pet_age:i,
        pet_category:"개"+i,
        pet_lost_date:"2021-10-30",
        pet_lost_region: region,
        is_found: boolean,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
      datas.push(obj)
    }
    

    return queryInterface.bulkInsert('posts', datas, {});

   
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
    await queryInterface.bulkDelete('posts',null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
