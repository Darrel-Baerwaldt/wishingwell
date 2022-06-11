const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const saltRounds = +process.env.BCRYPT_SALT

exports.userTest = async (req, res) => {
    // await User.findOne({username: "username", password: "password"}).then((user) => res.json(user));
    res.send("Darrel")
  }

  exports.userRegister = async (req, res, next) => {
    const { fName, lName, username, email, zipcode, password} =
      req.body;

      const user = await User.findOne({ email: email });

      if (!user) {
        
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        
        const newUser = new User({
          fName,
          lName,
          username,
          email,
          zipcode,
          password: hash
        });
        
        
        newUser.save()
        return res.json("it worked")
      }

      console.log("User already exsits")
      res.json("User already exsits")

  };

  exports.userLogin = (req, res) => {
    console.log(req.body)
    // res.json("Tina")
    // const { email, password } = req.body;
    // let token;
    // let user;
  
    // try {
    //   user = await User.findOne({ email: email });
    //   console.log(user)
  
    //   const passMatch = bcrypt.compareSync(password, user.password);
    //   if (!passMatch) {
    //     return res.render('login', { message: 'Please enter a valid password!' });
    //   }
  
    //   const payload = {
    //     fName: user.fName,
    //     lName: user.lName,
    //     username: user.username,
    //     email: email,
    //     isAdmin: user.isAdmin,
    //     id: user._id,
    //   };
    //   console.log(payload)
  
    //   token = jwt.sign(payload, secret, { expiresIn: '1d' });
    //   res.cookie('loggedIn', token);
    // } catch (err) {
    //   res.status(500).json({ err: err.message });
    // }
  
    // ///////////////// UNSURE IF I WILL USE THESE ///////////////////
  
    // res.user = user;
    // res.token = token;
    // res.loggedIn = true;
  
    // next();

  };