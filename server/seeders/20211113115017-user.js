'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users',[{
      email:'dp@naver.com',
      nickname:'wwe',
      password:'ddpak',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      email:'dpe@naver.com',
      nickname:'wwes',
      password:'ddpak',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        email:'dpa@naver.com',
        nickname:'wwewe',
        password:'ddpak',
        createdAt: new Date(),
        updatedAt: new Date()
      },

        {
          email:'dpasd@naver.com',
          nickname:'wwasdasde',
          password:'ddpak',
          createdAt: new Date(),
          updatedAt: new Date()
        },

          {
            email:'dpasasdasddasd@naver.com',
            nickname:'a4asda4s9d',
            password:'ddpak',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            email:'dpasdadssa@naver.com',
            nickname:'',
            password:'ddpak',
            createdAt: new Date(),
            updatedAt: new Date()
          }
            , 
            {
              email:'dp@naver.com',
              nickname:'wwe',
              password:'ddpak',
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
    return queryInterface.dropTable('users');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
