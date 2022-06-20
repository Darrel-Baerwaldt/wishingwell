const mongoose = require('mongoose');

const User = require("../models/User")
const journalSchema = mongoose.Schema({
          userId: User.Schema.Types.ObjectId, ref: 'User',
          title: String,
          date: String,
          body: String,
        })
     
  
  module.exports = mongoose.model('journal', journalSchema);
  