'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    // static associate(models) {
    //   users.hasMany(models.user_roles, {
    //     as: 'categories',
    //     foreignKey: 'id'
    //   });
    // }
  };
  categories.init({
    name: DataTypes.STRING,
    parent_id: DataTypes.STRING,
    inserted_at:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};