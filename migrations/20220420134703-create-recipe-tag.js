"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("recipeTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "recipes",
          key: "id",
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: "tags",
          key: "id",
        },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("recipeTags");
  },
};
