const User = require("../models/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    var salt = await bcrypt.genSaltSync(10);
  } catch (error) {
    res.status(500).json({ error });
  }
  try {
    let hash = await bcrypt.hashSync(req.body.password, salt);
    let user = new User({
      email: req.body.email,
      password: hash,
    });
    user.save();
    res.status(201).send("user created");
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Invalid password" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "THE_SUPER_PRIVATE_KEY", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
