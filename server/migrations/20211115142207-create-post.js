'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.INTEGER,
     
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        allowNum: false,
        onDelete: 'cascade', 
        onUpdate: 'cascade',
        
      },
      pet_name: {
        type: Sequelize.STRING
      },
      pet_sex: {
        type: Sequelize.STRING
      },
      pet_age: {
        type: Sequelize.INTEGER
      },
      pet_category: {
        type: Sequelize.STRING
      },
      pet_lost_region: {
        type: Sequelize.INTEGER
      },
      pet_lost_date: {
        type: Sequelize.DATE
      },
      is_found: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('posts');
  }
};