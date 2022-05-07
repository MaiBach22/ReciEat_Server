"use strict";
const { user } = require("pg/lib/defaults");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.user, { as: "owner", foreignKey: "userId" });

      // recipe.belongsToMany(models.user, {
      //   through: "recipeLikes",
      //   foreignKey: "recipeId",
      //   as: "liked",
      // });

      // user.findByPk(1, { include: [{ model: Recipe, as: "liked" }] });

      recipe.hasMany(models.comment, { foreignKey: "recipeId" });
      recipe.hasMany(models.ingredient, { foreignKey: "recipeId" });
      recipe.hasMany(models.instruction, { foreignKey: "recipeId" });
      recipe.belongsToMany(models.tag, {
        through: "recipeTags",
        foreignKey: "recipeId",
      });
    }
  }
  recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imgUrl: { type: DataTypes.STRING, allowNull: false },
      preptime: { type: DataTypes.STRING, allowNull: false },
      cooktime: { type: DataTypes.STRING, allowNull: false },
      serving: { type: DataTypes.STRING, allowNull: false },
      likes: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
