'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_orders extends Model {
    static associate(models) {
      sales_orders.hasMany(models.roles, {
         as: 'coupones',
         foreignKey: 'id'
       });
     }
   };
  sales_orders.init({
    id: DataTypes.INTEGER,
    oder_date: DataTypes.DATE,
    total: DataTypes.INTEGER,
    cupon_id: DataTypes.INTEGER,
    session_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales_orders',
  });
  return sales_orders;
};