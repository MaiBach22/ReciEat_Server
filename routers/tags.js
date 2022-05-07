const { Router } = require("express");
const auth = require("../auth/middleware");
const Tags = require("../models").tag;
// const Tag = require("../models").recipetag;
const Recipe = require("../models").recipe;
const tagsRouter = new Router();

//send a list of tags
//testing => http :4000/tags
tagsRouter.get("/", async (req, res, next) => {
  try {
    const tags = await Tags.findAll({
      include: { model: Recipe, attributes: ["title"] },
    });

    res.send(tags);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//GET a specific tagid, including all its recipe
//testing http :4000/tags/1

tagsRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const tagsId = await Tags.findByPk(id, { include: [Recipe] });

    if (!tagsId) {
      res.status(404).send("No Recipe found");
    } else {
      res.send(tagsId);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = tagsRouter;
