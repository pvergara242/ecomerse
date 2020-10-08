"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRoles extends Model {
    static associate(models) {
      userRoles.belongsTo(models.Users, { foreignKey: "user_id", as: "users" });
      userRoles.belongsTo(models.Roles, { foreignKey: "role_id", as: "roles" });
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
