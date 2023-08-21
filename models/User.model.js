const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    minLength: 7,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  avatar: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
})

module.exports = new mongoose.model("User", userSchema)
