'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_products extends Model {
    static associate(models) {
      order_products.belongsTo(models.sales_orders, {
        as: 'sales_orders',
        foreignKey: 'order_id'
      });
    }
  };
  order_products.init({
    order_id: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.NUMERIC,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'order_products',
  });
  return order_products;
};