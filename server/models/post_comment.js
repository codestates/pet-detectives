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
<<<<<<< HEAD
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
=======
      post_comment.belongsTo(models.user,{foreignKey:'user_id'})
      post_comment.belongsTo(models.post,{foreignKey:'post_id'})
      // define association here
    }
  };
  post_comment.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post_comment',
  });
  return post_comment;
};