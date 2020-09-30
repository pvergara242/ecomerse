'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_categories extends Model {
    static associate(models) {
        product_categories.belongsToMany(models.product_status_id, {
          as: 'categories',
          foreignKey: 'id'
        });
        product_categories.belongsToMany(models.product_status_id, {
          as: 'categories',
          foreignKey: 'id'
        });
      }
    };
  product_categories.init({
    category_id: DataTypes.NUMBER,
    product_id: DataTypes.NUMBER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'product_categories',
  });
  return product_categories;
};