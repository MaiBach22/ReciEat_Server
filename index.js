const express = require("express");
const cors = require("cors");
const authMiddleWare = require("./auth/middleware");

const { PORT } = require("./config/constants");
const recipeRouter = require("./routers/recipe");
const tagsRouter = require("./routers/tags");
const authRouter = require("./routers/auth");
// Create an express app
const app = express();

app.use(cors());

const bodyParserMiddleWare = express.json();

app.use(bodyParserMiddleWare);
app.use("/recipes", recipeRouter);
app.use("/auth", authRouter);
app.use("/tags", tagsRouter);

app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
