'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      Users.belongsToMany(models.Roles, {
        as: 'categories',
        foreignKey: 'id'
      })
    }
  };
  categories.init({
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};