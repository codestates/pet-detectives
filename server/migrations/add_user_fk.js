'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('posts', "userId", {
      type: Sequelize.INTEGER,
      references: { model: "users", key: 'id' },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('posts', "userId");
  }
};