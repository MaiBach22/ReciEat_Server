"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "BBQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Quick Meal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Low-Carb",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Most-liked",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
