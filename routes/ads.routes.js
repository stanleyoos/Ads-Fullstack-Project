const express = require("express")
const router = express.Router()
const imageUpload = require("../utils/imageUpload")
const authMiddleware = require("../middleware/authMiddleware")

const {
  getAll,
  getOne,
  getBySearchedPhrase,
  addNewAd,
  deleteOne,
  editAd,
} = require("../controllers/ads.controller")

router
  .route("/")
  .get(getAll)
  .post(authMiddleware, imageUpload.single("image"), addNewAd)
router
  .route("/:id")
  .get(getOne)
  .delete(deleteOne)
  .put(authMiddleware, imageUpload.single("image"), editAd)
router.get("/phrase/:phrase", getBySearchedPhrase)

module.exports = router
