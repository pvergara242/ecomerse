'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product_statuses extends Model {
        static associate(models) {
            product_statuses.belongsTo(models.products, {
             
                foreignKey: 'id'
            })
        }
    };
    product_statuses.init({
        name: DataTypes.STRING
    }, {sequelize, modelName: 'product_statuses'});
    return product_statuses;
};