'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hashtag.belongsToMany(models.post,{
        through:'post_hashtag',foreignKey:'hashtag_id'

      })
      // define association here
    }
  };
  hashtag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag',
  });
  return hashtag;
};