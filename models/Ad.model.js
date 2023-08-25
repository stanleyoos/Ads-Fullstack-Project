const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  content: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  localization: {
    type: String,
    required: true,
  },
  userInfo: {
    type: String,
    required: false,
    ref: "User",
  },
})

module.exports = new mongoose.model("Ad", adSchema)
