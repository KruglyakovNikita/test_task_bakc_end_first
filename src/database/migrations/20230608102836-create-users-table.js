const tableName = "users";

module.exports = {
  up: (queryInterface,Sequelize) => queryInterface.sequelize.transaction(async (t) => {
    await queryInterface.createTable(tableName,{
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }
    },{ transaction: t });
  }),

  down: (queryInterface) => queryInterface.sequelize.transaction(async (t) => {
    await queryInterface.dropTable(tableName,{ transaction: t });
  })
};
