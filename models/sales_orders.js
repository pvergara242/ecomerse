'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_orders extends Model {
    static associate(models) {
      sales_orders.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      });
      sales_orders.belongsTo(models.coupons, {
        as: 'coupons',
        foreignKey: 'coupon_id'
      });
      sales_orders.belongsTo(models.sessions, {
        as: 'sessions',
        foreignKey: 'session_id'
      });
      sales_orders.hasMany(models.cc_transactions, {
        as: 'cc_transactions',
        foreignKey: 'id'
      });
      sales_orders.hasMany(models.order_products, {
        as: 'order_products',
        foreignKey: 'id'
      });
    }
  };
  Sales_Orders.init({
    order_date: DataTypes.DATE,
    total: DataTypes.NUMERIC,
    coupon_id: DataTypes.INTEGER,
    session_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales_orders',
  });
  return sales_orders;
};