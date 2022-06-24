const express = require('express');
const app = require('../app');
const router = express.Router();
const {User} = require("../models/User")

const selfieController = require ("../controllers/selfieController")

// router.get("/", async (req, res) => {
//    const {userId} = req.body
//    const user = await User.findOne({userId: userId}).then((selfie) => res.json(selfie)).catch((err) => res.status(400).json(`Error: ${err}`))
//    console.log(user)
//    console.log("router.get worked!")
// })


router.post("/", selfieController.postSelfie)

module.exports = router