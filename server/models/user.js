'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.post,{foreignKey:'user_id' })
      user.hasMany(models.post_comment,{foreignKey:'user_id'})
      // define association here
      user.hasMany(models.post_comment, {
        foreignKey: "userId",
      });
      user.hasMany(models.post, {
        foreignKey: "userId",
      });
    }
<<<<<<< HEAD
  }
  user.init({
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
=======
  };
  user.init({
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};