'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_statuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_statuses.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_statuses',
  });
  return product_statuses;
};