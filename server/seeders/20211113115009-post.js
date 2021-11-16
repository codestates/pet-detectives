'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('posts',[{



    // ],},
   
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
    await queryInterface.bulkDelete('pets',null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
