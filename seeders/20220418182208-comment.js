"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          username: "MM",
          content: "Very delicious!",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          username: "MM",
          content: "Nice recipe!",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          username: "MM",
          content: "I recommend this recipe if you want to make this dishes",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          username: "Mai",
          content:
            "Followed this recipe and it 's tasty very good, recommended!",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          username: "Mai",
          content: "Why not give it a try",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          username: "Mai",
          content: "Super!",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          username: "Mai",
          content: "Thank you to offer this recipe, help me a lot",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
