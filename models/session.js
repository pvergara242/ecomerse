'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sessions extends Model {
    static associate(models) {
      Sessions.hasMany(models.sales_orders, {
        as: 'sales_orders',
        foreignKey: 'id'
      });
    }
  };
  Sessions.init({
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sessions',
  });
  return Sessions;
};