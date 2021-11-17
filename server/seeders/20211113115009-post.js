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
    return queryInterface.dropTable('posts');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
