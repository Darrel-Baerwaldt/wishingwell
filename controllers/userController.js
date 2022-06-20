const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const saltRounds = +process.env.BCRYPT_SALT;

exports.userTest = async (req, res) => {
  // await User.findOne({username: "username", password: "password"}).then((user) => res.json(user));
  res.send("Darrel");
};

exports.userRegister = async (req, res, next) => {
  const { fName, lName, username, email, zipcode, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      fName,
      lName,
      username,
      email,
      zipcode,
      password: hash,
    });

    newUser.save();
    return res.json("it worked");
  }

  console.log("User already exsits");
  res.json("User already exsits");
};