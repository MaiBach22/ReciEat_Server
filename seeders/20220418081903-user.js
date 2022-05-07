"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Mai",
          password: "123456",
          email: "m@m",
          avatarImg: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MM",
          password: "123456789",
          email: "m1@m",
          avatarImg: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
