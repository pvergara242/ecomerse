'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cc_transactions extends Model {
    static associate(models) {
    //   users.hasMany(models.user_roles, {
    //     as: 'user_roles',
    //     foreignKey: 'id'
    //   });
    }
  };
  cc_transactions.init({
    code: DataTypes.STRING,
    order_id: DataTypes.NUMBER,
    transdate: DataTypes.DATE,
    processor: DataTypes.STRING,
    processor_trans_id: DataTypes.STRING,
    discount_price: DataTypes.STRING,
    amount: DataTypes.NUMBER,
    cc_type: DataTypes.STRING,
    cc_num: DataTypes.STRING,
    response: DataTypes.STRING,
    inserted_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'cc_transactions',
  });
  return cc_transactions;
};