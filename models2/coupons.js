'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coupons extends Model {
    static associate(models) {
    //   users.hasMany(models.user_roles, {
    //     as: 'user_roles',
    //     foreignKey: 'id'
    //   });
    }
  };
  coupons.init({
    code: DataTypes.STRING,
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    value: DataTypes.NUMBER,
    multiple: DataTypes.BOOLEAN,
    start_date: DataTypes.STRING,
    end_date: DataTypes.DATE,
    inserted_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'coupons',
  });
  return coupons;
};