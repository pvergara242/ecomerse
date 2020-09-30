'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.belongsToMany(models.product_status_id, {
        as: 'product_categories',
        foreignKey: 'category_id'
      });
      products.belongsToMany(models.product_status_id, {
        as: 'product_categories',
        foreignKey: 'category_id'
      });
    }
  };
  products.init({
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    product_status_id: DataTypes.STRING,
    regular_price: DataTypes.STRING,
    discount_price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    taxable: DataTypes.STRING,
    inserted_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};