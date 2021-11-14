'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user, {
        foreignKey: "userId",
      });
      post.hasMany(models.post_comment, {
        foreignKey: "postId",
      });
    }
  }
  post.init({
    image: DataTypes.BLOB,
    description: DataTypes.TEXT,
    pet_name: DataTypes.STRING,
    pet_sex: DataTypes.STRING,
    pet_age: DataTypes.STRING,
    pet_category: DataTypes.STRING,
    pet_lost_region: DataTypes.INTEGER,
    pet_lost_date: DataTypes.DATE,
    is_found: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};