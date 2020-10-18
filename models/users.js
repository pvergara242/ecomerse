"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.belongsToMany(models.roles, {
        through: "user_roles",
        as: "roles",
        foreignKey: "user_id",
      });
      users.hasMany(models.sales_orders, {
        as: 'sales_orders',
        foreignKey: 'id'
      });
    }
  }
  users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
      underscored: true,
    }
  );
  return users;
};

