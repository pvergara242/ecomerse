"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      categories.belongsToMany(models.Roles, {
        through: 'product_categories',
        as: "categories",
        foreignKey: "id",
      });
    }
  }
  categories.init(
    {
      name: DataTypes.STRING,
      parent_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "categories",
    }
  );
  return categories;
};

