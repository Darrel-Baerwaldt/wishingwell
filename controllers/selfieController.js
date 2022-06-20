// const { Selfie } = require("../models/Selfie")
// const { User } = require("../models/User")

// // exports.getSelfie = async (req, res, next) => {
// //    // let userId = decoded.payload.id
// //    const user = await User.find()
// //    console.log(user)
// //    console.log("router.get worked!")
// //    // console.log("userId is ", userId)
// //    // const user = User.findById(userId)
// // }

// exports.addSelfie = async (req, res, next) => {
//    const {url, date, description} = req.body
//    const user = await User.findOne()
//    const newSelfie = new Selfie({
//      url,
//      date,
//      description
//    })
 
//    newSelfie.save()
//    console.log("selfie saved!")
//  }