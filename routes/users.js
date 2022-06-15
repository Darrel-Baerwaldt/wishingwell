const express = require('express');
const app = require('../app');
const router = express.Router();
const {User} = require("../models/User")
const Joi = require('joi')
const bcrypt = require('bcrypt')
const secret = process.env.JWT_SECRET;

const userController = require("../controllers/userController")

/* GET users listing. */
// router.get('/', async (req, res) => {
//   // await User.findOne({username: "username", password: "password"}).then((user) => res.json(user));
//   res.send("Darrel")
// });
router.get('/', userController.userTest);

// router.post('/login', userController.userLogin);
router.post("/login", async(req, res) => {
   // const { email, password } = req.body;
   try {
      const{error} = validate(req.body)
      if(error) {
         return res.status(400).send({message: "error"})
         // return res.status(400).message(error)
      }
      const user = await User.findOne({email: req.body.email})
      if (!user) {
         return res.status(401).send({message: "Invalid Email or Password"})
      }
      const passMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!passMatch) {
         return res.status(401).send({message: "Invalid Password"})
      }
     
       // Get accessToken from user model method
       const token = user.generateAccessToken()
      //  jwt.sign(payload, secret, { expiresIn: "1d" }); 
       res.status(200).send({data: token, message: "Successfully logged in"})

   } catch (error) {
      return res.status(500).send({message: "Internal server error"})
   }
})

const validate = (data) => {
   const schema = Joi.object({
      email: Joi.string().email().required().label("Email"),
      password: Joi.string().required().label('Password')
   })
   return schema.validate(data)
}

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
