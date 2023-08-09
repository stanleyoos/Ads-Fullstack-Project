const express = require("express")
const router = express.Router()

const {
  getAll,
  getOne,
  getBySearchedPhrase,
  addNewAd,
  deleteOne,
  editAd,
} = require("../controllers/ads.controller")

router.route("/").get(getAll).post(addNewAd)
router.route("/:id").get(getOne).delete(deleteOne).put(editAd)
router.get("/phrase/:phrase", getBySearchedPhrase)

module.exports = router
