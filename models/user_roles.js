"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRoles extends Model {
    static associate(models) {
      
    }
  }
  userRoles.init(
    {
      user_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userRoles",
      tableName: "user_roles",
      underscored: true,
    }
  );
  return userRoles;
};
