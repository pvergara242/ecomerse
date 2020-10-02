'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_role extends Model {
    static associate(models) {
      user_roles.belongsToMany(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      });
      user_roles.belongsToMany(models.roles, {
        as: 'roles',
        foreignKey: 'role_id'
      });
    }
  };
  user_role.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_role',
  });
  return user_role;
};