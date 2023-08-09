const User = require("../models/User.model")
const bcrypt = require("bcryptjs")

exports.register = async (req, res) => {
  try {
    const { login, password, avatar, phone } = req.body
    if (
      login &&
      typeof login === "string" &&
      password &&
      typeof password === "string" &&
      avatar &&
      typeof avatar === "string" &&
      phone &&
      typeof phone === "string"
    ) {
      const userWithLogin = await User.findOne({ login })
      if (userWithLogin) {
        return res
          .status(409)
          .json({ message: "User with this login already exists!" })
      }

      const newUser = new User({
        login,
        password: await bcrypt.hash(password, 10),
        avatar,
        phone,
      })
      await newUser.save()
      res.status(201).json({
        message: `New user with login ${newUser.login} has been created!`,
      })
    } else {
      res.status(400).json({ message: "Bad request" })
    }
  } catch (error) {
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
          req.session = user
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
  // get user info
  //const user = await User.findById(req.session.id)
  res.json({
    message: "You are logged in",
    user: req.session,
    //avatar: user.avatar,
  })
}
