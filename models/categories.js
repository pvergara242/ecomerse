"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      categories.belongsToMany(models.products, {
        through: 'product_categories',
        as: 'products',
        foreignKey: 'id'
      });
      categories.hasMany(models.categories, {
        as: 'categories',
        foreignKey: 'parent_id'
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

