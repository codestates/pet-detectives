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
<<<<<<< HEAD
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
=======
      
     post.belongsTo(models.user,{
foreignKey:'user_id'
    
      })
      post.hasMany(models.post_comment,{foreignKey:'post_id'})

      post.belongsToMany(models.hashtag,{
        through:'post_hashtag',foreignKey:'post_id'})
      // define association here)
    }
  
  };
  post.init({
    image: DataTypes.BLOB,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    pet_name: DataTypes.STRING,
    pet_sex: DataTypes.STRING,
    pet_age: DataTypes.INTEGER,
    pet_category: DataTypes.STRING,
    pet_lost_region: DataTypes.STRING,
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
    pet_lost_date: DataTypes.DATE,
    is_found: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};