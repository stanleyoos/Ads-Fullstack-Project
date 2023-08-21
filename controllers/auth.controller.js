const User = require("../models/User.model")
const bcrypt = require("bcryptjs")
const getImageFileType = require("../utils/getImageFileType")
const fs = require("fs")

exports.register = async (req, res) => {
  try {
    const { login, password, phone } = req.body
    const fileType = req.file ? await getImageFileType(req.file) : "unknown"
    const acceptableExt = ["image/png", "image/jpeg", "image/gif"]

    if (
      login &&
      typeof login === "string" &&
      password &&
      typeof password === "string" &&
      phone &&
      typeof phone === "string" &&
      req.file &&
      acceptableExt.includes(fileType)
    ) {
      const userWithLogin = await User.findOne({ login })
      if (userWithLogin) {
        fs.unlinkSync(`${req.file.destination}/${req.file.filename}`)
        return res
          .status(409)
          .json({ message: "User with this login already exists!" })
      }

      const newUser = new User({
        login,
        password: await bcrypt.hash(password, 10),
        avatar: req.file.filename,
        phone,
      })
      await newUser.save()
      res.status(201).json({
        message: `New user with login ${newUser.login} has been created!`,
      })
    } else {
      fs.unlinkSync(`${req.file.destination}/${req.file.filename}`)
      res.status(400).json({ message: "Bad request" })
    }
  } catch (error) {
    if (req.file) fs.unlinkSync(`${req.file.destination}/${req.file.filename}`)
    res.status(500).json({ message: error.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body
    if (
      login &&
      typeof login === "string" &&
      password &&
      typeof password === "string"
    ) {
      const user = await User.findOne({ login })
      if (!user) {
        res.status(400).json({ message: "Login or password are incorrect" })
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.user = user
          res.status(200).json({ message: "Login successful" })
        } else {
          res.status(400).json({ message: "Login or password are incorrect" })
        }
      }
    } else {
      res.status(400).send({ message: "Bad request" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getUser = async (req, res) => {
  res.json({
    user: req.session.user,
  })
}

exports.logout = async (req, res) => {
  try {
    req.session.destroy()
    res.status(200).json({ message: "You have been logged out" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
