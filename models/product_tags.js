'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_tags extends Model {
   
    static associate(models) {
      // define association here
    }
  };
  product_tags.init({
    product_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_tags',
  });
  return product_tags;
};