const mongoose = require("mongoose")
// const { Schema } = require('mongoose'); 

const selfieSchema = mongoose.Schema({
   imageUrl: {
      type: String
  },
  date: {
      type: String
  },
  description: {
      type: String
  },
})

// module.exports = mongoose.model('Selfie', selfieSchema)
const Selfie = mongoose.model("selfie", selfieSchema)

module.exports = {Selfie}
