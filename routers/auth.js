const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please provide both email and password");
  }

  const user = await User.findOne({ where: { email } }, { include: User });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res
      .status(400)
      .send("User with that email not found or password incorrect");
  }

  delete user.dataValues["password"]; // don't send back the password hash
  const token = toJWT({ userId: user.id });
  console.log("token", token);
  return res.status(200).send({ token, ...user.dataValues });
});

router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      username,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    console.log(token);
    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send("There is an existing account with this email");
    }

    return res.status(400).send("Something went wrong, sorry");
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
