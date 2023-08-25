const Ad = require("../models/Ad.model")
const User = require("../models/User.model")
const getImageFileType = require("../utils/getImageFileType")
const fs = require("fs")

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
    }).populate("userInfo")
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
  // delete ad only when req.session.user.id === ad.userInfo
  // users can only delete their ads
  try {
    const ad = await Ad.findById(req.params.id)
    if (ad) {
      if (ad.userInfo === req.session.user._id) {
        await Ad.deleteOne({ _id: req.params.id })
        res.json(ad)
      } else res.status(404).json({ message: "You can delete only your ads!" })
    } else res.status(404).json({ message: "Not found..." })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const addNewAd = async (req, res) => {
  try {
    const { title, content, price, localization, date } = req.body
    const fileType = req.file ? await getImageFileType(req.file) : "unknown"
    const acceptableExt = ["image/png", "image/jpeg", "image/gif"]

    if (
      title &&
      typeof title === "string" &&
      content &&
      typeof content === "string" &&
      price &&
      typeof price === "string" &&
      localization &&
      typeof localization === "string" &&
      req.file &&
      acceptableExt.includes(fileType)
    ) {
      // add new ad
      const newAd = new Ad({
        title,
        content,
        date,
        price,
        localization,
        userInfo: req.session.user._id,
        image: req.file.filename,
      })
      await newAd.save()
      res.status(201).json({
        message: `New ad with title "${newAd.title}" has been added!`,
      })
    } else {
      fs.unlinkSync(`${req.file.destination}/${req.file.filename}`)
      res.status(400).json({ message: "Bad request" })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const editAd = async (req, res) => {
  const { title, content, date, price, localization, userInfo } = req.body
  try {
    const ad = await Ad.findById(req.params.id)
    const fileType = req.file ? await getImageFileType(req.file) : "unknown"
    const acceptableExt = ["image/png", "image/jpeg", "image/gif"]
    if (ad) {
      ad.title = typeof title === "string" ? title : ad.title
      ad.content = typeof content === "string" ? content : ad.content
      ad.date = typeof date === "string" ? date : ad.date
      ad.image =
        req.file.filename && acceptableExt.includes(fileType)
          ? req.file.filename
          : ad.image
      ad.price = typeof price === "string" ? price : ad.price
      ad.localization =
        typeof localization === "string" ? localization : ad.localization
      ad.userInfo = typeof userInfo === "string" ? userInfo : ad.userInfo

      await ad.save()
      res.json(ad)
    } else {
      fs.unlinkSync(`${req.file.destination}/${req.file.filename}`)
      res.status(404).json({ message: "Not found..." })
    }
  } catch (error) {
    res.status(500).json({ message: error })
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
