'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cc_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      transdate: {
        type: Sequelize.DATE
      },
      processor_trans_id: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      },
      cc_num: {
        type: Sequelize.STRING
      },
      cc_type: {
        type: Sequelize.STRING
      },
      response: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cc_transactions');
  }
};