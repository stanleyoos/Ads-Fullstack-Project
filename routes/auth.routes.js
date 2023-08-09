const express = require("express")
const router = express.Router()

const auth = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/register", auth.register)
router.post("/login", auth.login)
router.get("/user", authMiddleware, auth.getUser)

module.exports = router
