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
      post_comment.belongsTo(models.user,{foreignKey:'user_id'})
      post_comment.belongsTo(models.post,{foreignKey:'post_id'})
      // define association here
    }
  };
  post_comment.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post_comment',
  });
  return post_comment;
};