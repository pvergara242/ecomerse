'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      Roles.belongsToMany(models.Users, {
        through: 'user_roles',
        as: 'users',
        foreignKey: 'role_id'
      })
    }
  };
  roles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles',
    underscored: true
  });
  return roles;
};