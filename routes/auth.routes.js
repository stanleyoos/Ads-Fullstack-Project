const express = require("express")
const router = express.Router()

const auth = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/authMiddleware")
const imageUpload = require("../utils/imageUpload")

router.post("/register", imageUpload.single("avatar"), auth.register)
router.post("/login", auth.login)
router.get("/user", auth.getUser)
router.delete("/logout", authMiddleware, auth.logout)

module.exports = router
