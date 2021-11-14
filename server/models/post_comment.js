'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post_comment.belongsTo(models.user, {
        foreignKey: "userId",
      });
      post_comment.belongsTo(models.post, {
        foreignKey: "postId",
      });
    }
  }
  post_comment.init({
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post_comment',
  });
  return post_comment;
};