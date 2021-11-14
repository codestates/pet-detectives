'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
   
  references: {
    model: {
      tableName: "users",
    },
    key: "id",
  },
 
allowNull:false,
},

      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false

  ,references: {
    model: {
      tableName: "users",
    },
    key: "id",
  },
allowNull:false
},
 
      comment: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_comments');
  }
};