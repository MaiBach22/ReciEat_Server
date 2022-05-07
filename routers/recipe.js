const { Router } = require("express");
const { user } = require("pg/lib/defaults");
const auth = require("../auth/middleware");

const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Instruction = require("../models").instruction;
const Comment = require("../models").comment;
const Tag = require("../models").tag;
const RecipeTag = require("../models").recipeTag;
const { tag } = require("../models");

// const auth = require("../auth/middleware");
const recipeRouter = new Router();

//send a list of recipes
//testing => http :4000/recipes
recipeRouter.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      include: { model: tag, attributes: ["title"] },
    });

    res.send(recipes);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//send a list of tags
//testing => http :4000/recipes/tags
recipeRouter.get("/tags", async (req, res, next) => {
  try {
    const tags = await Tag.findAll();

    res.send(tags);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//GET a specific recipes, including all its ingredient and instruction
//testing http :4000/recipes/1

recipeRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findByPk(id, {
      include: [Instruction, Ingredient, Comment, Tag],
    });

    if (!recipe) {
      res.status(404).send("No Recipe found");
    } else {
      res.send(recipe);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update liked
//testing http PATCH :4000/recipes/1 likes=3
recipeRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // const { likes } = req.body;

    const toUpdate = await Recipe.findByPk(id);

    const updateLikes = await toUpdate.update({ likes: toUpdate.likes + 1 });

    console.log(updateLikes);
    // const updatedLike = await Recipe.update({ likes }, { where: { id } });
    res.send(updateLikes);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//POST a new comment to recipe with corresponding id
//testing: http :4000/recipes/1/comment email content
recipeRouter.post("/:id/comment", auth, async (req, res) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findByPk(id);

    if (recipe === null) {
      return res.status(404).send({ message: "This art does not exist" });
    }

    const { username, content } = req.body;

    const comment = await Comment.create({
      username,
      content,
      recipeId: recipe.id,
    });

    return res.status(201).send({ message: "comment created", comment });
  } catch (e) {
    console.log(e.message);
  }
});

// //POST a new recipe to recipes
// //testing: http :4000/recipes/postrecipe
recipeRouter.post("/postrecipe", async (req, res) => {
  try {
    const {
      ingredients,
      instructions,
      recipetags,
      title,
      imgUrl,
      preptime,
      cooktime,
      serving,
      userId,
    } = req.body;

    const newRecipe = await Recipe.create({
      title,
      imgUrl,
      preptime,
      cooktime,
      serving,
      likes: 0,
      userId,
    });

    // now I have a new recipe id

    const ingredientCreate = ingredients.map((ing) => {
      Ingredient.create({
        text: ing.text,
        amount: ing.amount,
        measure: ing.unit,
        recipeId: newRecipe.id,
      });
    });

    const instructionCreate = instructions.map((ins) => {
      Instruction.create({
        content: ins.content,
        recipeId: newRecipe.id,
      });
    });

    // const iterator = recipetags.values();
    // for (const value of iterator) {

    // }

    const recipetagCreate = recipetags.map((tag) => {
      RecipeTag.create({
        tagId: tag,
        recipeId: newRecipe.id,
      });
    });
    console.log(recipetagCreate);
    return res.status(201).send({ message: "recipe created", newRecipe });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = recipeRouter;
