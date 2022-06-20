const mongoose = require("mongoose")
const { Schema } = require('mongoose'); 

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET;
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity');
const { JSONCookie } = require("cookie-parser");

const userSchema = mongoose.Schema({
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    zipcode: {type: Number, required: true},
    password: {type: String, required: true},
    // selfies: {
    //     photos: [
    //       {
    //         photoId: { type: Schema.Types.ObjectId, ref: 'Selfie' },
    //       },
    //     ],
    //   },
})

userSchema.methods.generateAccessToken = function () {
    const token = jwt.sign({_id: this._id}, secret, {expiresIn: "1d"})
    return token
}

const User = mongoose.model("user", userSchema)

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().label("email"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = {User, validate}
