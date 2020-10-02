'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cc_transactions extends Model {
    static associate(models) {
      cc_transactions.belongsTo(models.sales_orders, {
        as: 'sales_orders',
        foreignKey: 'order_id'
      });
    }
  };
  cc_transactions.init({
    code: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    transdate: DataTypes.DATE,
    processor: DataTypes.STRING,
    processor_trans_id: DataTypes.STRING,
    amount: DataTypes.NUMERIC,
    cc_num: DataTypes.STRING,
    cc_type: DataTypes.STRING,
    response: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cc_transactions',
  });
  return cc_transactions;
};