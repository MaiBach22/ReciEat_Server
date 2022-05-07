"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Spaghetti Bolognese",
          imgUrl: "https://i.ibb.co/BNXj3HF/spaghetti-bolognese.jpg",
          preptime: "15 mins",
          cooktime: "20 mins",
          serving: "2-3",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Roast Chicken With Potatoes",
          imgUrl: "https://i.ibb.co/xDW9LjK/roasted-chicken-with-potatoes.jpg",
          preptime: "15 mins",
          cooktime: "60 mins",
          serving: "4",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Mummy Hot Dogs",
          imgUrl: "https://i.ibb.co/g4PSKbr/Mummy-Hot-Dogs.webp",
          preptime: "5 mins",
          cooktime: "35 mins",
          serving: "2-4",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Perfect Prime Rib",
          imgUrl:
            "https://i.ibb.co/hC2R7SV/prime-rib-horizontal-cutting-board-1541011735.webp",
          preptime: "10 mins",
          cooktime: "3 hours 10 mins",
          serving: "4",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },

        {
          title: "Grilled Broccoli",
          imgUrl:
            "https://i.ibb.co/RyyTdqx/singleimagebug-grilled-broccoli-1556566987.webp",
          preptime: "5 mins",
          cooktime: "25 mins",
          serving: "2-3",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Gazpacho",
          imgUrl:
            "https://i.ibb.co/0r0vPJx/delish-190606-gazpacho-266-landscape-pf-1560544275.webp",
          preptime: "15 mins",
          cooktime: "25 mins",
          serving: "2-3",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Salmon and Asparagus with Garlic Lemon Butter Sauce",
          imgUrl: "https://i.ibb.co/5jtb1Z0/salmon-meal-prep-recipe-2.jpg",
          preptime: "10 mins",
          cooktime: "20 mins",
          serving: "2-3",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Air Fryer Chicken and Vegetables",
          imgUrl:
            "https://i.ibb.co/m6vjSVP/healthy-Air-Fryer-Chicken-Recipe.jpg",
          preptime: "10 mins",
          cooktime: "10 mins",
          serving: "4",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
