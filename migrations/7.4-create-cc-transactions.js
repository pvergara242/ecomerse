"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CC_Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sales_orders",
          key: "id",
        },
      },
      transdate: {
        type: Sequelize.DATE,
      },
      processor: {
        type: Sequelize.STRING,
      },
      processor_trans_id: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.NUMERIC,
      },
      cc_num: {
        type: Sequelize.STRING,
      },
      cc_type: {
        type: Sequelize.STRING,
      },
      response: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CC_Transactions");
  },
};

