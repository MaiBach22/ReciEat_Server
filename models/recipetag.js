"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipeTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipeTag.belongsTo(models.tag);
      recipeTag.belongsTo(models.recipe);
    }
  }
  recipeTag.init(
    {
      recipeId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipeTag",
    }
  );
  return recipeTag;
};
