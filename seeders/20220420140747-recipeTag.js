"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipeTags",
      [
        {
          tagId: 2,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 6,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 2,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 4,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 6,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 3,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 6,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 4,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 2,
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 2,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          tagId: 2,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recipeTags", null, {});
  },
};
