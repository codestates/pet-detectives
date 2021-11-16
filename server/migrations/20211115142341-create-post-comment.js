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
        allowNum:false,
        onDelete: 'cascade', 
        onUpdate: 'cascade',
        
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "posts",
          },
          key: "id",
        },
        allowNum:false,
        onDelete: 'cascade', 
        onUpdate: 'cascade',
        
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