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
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hashtags');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
