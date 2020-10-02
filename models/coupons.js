"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class coupons extends Model {
    static associate(models) {
      coupons.hasMany(models.sales_orders, {
        as: "sales_orders",
        foreignKey: "id",
      });
    }
  }
  coupons.init(
    {
      code: DataTypes.STRING,
      description: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      value: DataTypes.NUMERIC,
      multiple: DataTypes.BOOLEAN,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "coupons",
    }
  );
  return coupons;
};
