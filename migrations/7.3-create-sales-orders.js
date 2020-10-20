"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales_orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_date: {
        type: Sequelize.DATE,
      },
      total: {
        type: Sequelize.NUMERIC,
      },
      coupon_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "coupons",
          key: "id",
        },
      },
      session_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sessions",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales_orders");
  },
};
