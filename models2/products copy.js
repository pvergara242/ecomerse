'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.hasMany(models.roles, {
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