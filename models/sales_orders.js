'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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