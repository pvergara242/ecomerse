'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
   
    static associate(models) {
      tags.belongsToMany(models.products, {
        through:'product_tags',
        as: 'products',
        foreignKey: 'tag_id'
      })
    }
  };
  tags.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tags',
  });
  return tags;
};