'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('post_comments', "userId", {
      type: Sequelize.INTEGER,
      references: { model: "users", key: 'id' },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }),
    queryInterface.addColumn('post_comments', "postId", {
      type: Sequelize.INTEGER,
      references: { model: "posts", key: 'id' },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('post_comments', "userId"),
    queryInterface.removeColumn('post_comments', "postId");
  }
};