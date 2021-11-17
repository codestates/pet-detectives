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
      
      post.belongsTo(models.user,{
foreignKey:'user_id'
    
      })
      
      post.hasMany(models.post_comment,{foreignKey:'post_id'})

      post.belongsToMany(models.hashtag,{
        through:'post_hashtag', onDelete: 'cascade', 
        onUpdate: 'cascade',})
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
    pet_lost_region: DataTypes.INTEGER,
    pet_lost_date: DataTypes.DATE,
    is_found: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};
