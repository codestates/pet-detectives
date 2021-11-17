'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD

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

=======
    
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
>>>>>>> 3c5a7a49e96e277993d1d366a60081b99f3e5a67
    
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
     await queryInterface.bulkDelete('users',null,{})
  }
};
