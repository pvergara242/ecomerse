'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.belongsToMany(models.products, {
        through: 'product_categories',
        as: 'categories',
        foreignKey: 'id'
      });
      products.hasMany(models.product_statuses, {
        as: 'products_statuses',
        foreignKey: 'id'
      });
    }
  };
  products.init({
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_status_id: DataTypes.INTEGER,
    regular_price: DataTypes.DECIMAL,
    discount_price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    texable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};