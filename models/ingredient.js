"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingredient.belongsTo(models.recipe);
    }
  }
  ingredient.init(
    {
      text: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.STRING, allowNull: true },
      measure: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};
