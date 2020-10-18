'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_categories extends Model {
   
    static associate(models) {
      // define association here
    }
  };
  product_categories.init({
    category_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_categories',
  });
  return product_categories;
};