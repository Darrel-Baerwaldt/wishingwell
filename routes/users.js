const express = require('express');
const app = require('../app');
const router = express.Router();
const User = require("../models/User")

const userController = require("../controllers/userController")

/* GET users listing. */
// router.get('/', async (req, res) => {
//   // await User.findOne({username: "username", password: "password"}).then((user) => res.json(user));
//   res.send("Darrel")
// });
router.get('/', userController.userTest);

router.post("/register", userController.userRegister);
// router.post('/register', (req, res, next) => {
//   const { fName, lName, username, email, password} =
//     req.body;

//     const newUser = new User({
//       fName,
//       lName,
//       username,
//       email,
//       password,
//     });

//     console.log(newUser)
//     app.send("it worked")
// });

module.exports = router;
