'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sessions extends Model {
    static associate(models) {
      sessions.hasMany(models.sales_orders, {
        as: 'sales_orders',
        foreignKey: 'id'
      });
    }
  };
  sessions.init({
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sessions',
  });
  return sessions;
};

