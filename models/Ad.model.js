const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 50,
  },
  content: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 1000,
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
    required: true,
    ref: "User",
  },
})

module.exports = new mongoose.model("Ad", adSchema)
