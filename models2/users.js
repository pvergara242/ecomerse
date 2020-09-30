'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      user_roles.belongsToMany(models.users, {
        as: 'products',
        foreignKey: 'user_id'
      });
      user_roles.belongsToMany(models.roles, {
        as: 'roles',
        foreignKey: 'products_id'
      });
    }
  };
  users.init({
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};