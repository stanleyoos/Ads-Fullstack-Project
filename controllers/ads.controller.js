const Ad = require("../models/Ad.model")
const User = require("../models/User.model")

const getAll = async (req, res) => {
  try {
    res.json(await Ad.find().populate("userInfo"))
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const getOne = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id).populate("userInfo")
    if (!ad) res.status(404).json({ message: "Not found..." })
    else res.json(ad)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const getBySearchedPhrase = async (req, res) => {
  try {
    const phrase = req.params.phrase
    const ads = await Ad.find({
      $or: [
        { title: { $regex: `${phrase}` } },
        { content: { $regex: `${phrase}` } },
      ],
    })
    if (ads) {
      res.status(200).json(ads)
    } else {
      res.status(404).json({ message: "Not found..." })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const deleteOne = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id)
    if (ad) {
      await Ad.deleteOne({ _id: req.params.id })
      res.json(ad)
    } else res.status(404).json({ message: "Not found..." })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const addNewAd = async (req, res) => {
  try {
    const { title, content, date, image, price, localization, userInfo } =
      req.body
    if (
      !title ||
      !content ||
      !date ||
      !image ||
      !price ||
      !localization ||
      !userInfo
    ) {
      res.status(400).json({ message: "Fill all fields!" })
    }
    const newAd = new Ad({
      title,
      content,
      date,
      image,
      price,
      localization,
      userInfo,
    })
    await newAd.save()
    res.json({ message: "ok" })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const editAd = async (req, res) => {
  const { title, content, date, image, price, localization, userInfo } =
    req.body
  try {
    const ad = await Ad.findById(req.params.id)
    if (ad) {
      ad.title = title || ad.title
      ad.content = content || ad.content
      ad.date = date || ad.date
      ad.image = image || ad.image
      ad.price = price || ad.price
      ad.localization = localization || ad.localization
      ad.userInfo = userInfo || ad.userInfo
      await ad.save()
      res.json(ad)
    } else {
      res.status(404).json({ message: "Not found..." })
    }
  } catch (error) {
    res.status(500).json({ message: err })
  }
}

module.exports = {
  getAll,
  getOne,
  getBySearchedPhrase,
  addNewAd,
  deleteOne,
  editAd,
}
