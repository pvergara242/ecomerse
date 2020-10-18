'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.belongsToMany(models.categories, {
        through: 'product_categories',
        as: 'categories',
        foreignKey: 'product_id'
      });
      products.hasMany(models.product_statuses, {
        as: 'products_statuses',
        foreignKey: 'product_status_id'
      });
      products.belongsToMany(models.tags, {
        through:'product_tags',
        as: 'tags',
        foreignKey: 'product_id'
      });
    }
  };
  products.init({
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_status_id: DataTypes.INTEGER,
    regular_price: DataTypes.INTEGER,
    discount_price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    texable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};