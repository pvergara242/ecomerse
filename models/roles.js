"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.belongsToMany(models.users, {
        through: "user_roles",
        as: "users",
        foreignKey: "role_id",
      });

    }
  }
  roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "roles",
      tableName: "roles",
      underscored: true,
    }
  );
  return roles;
};

