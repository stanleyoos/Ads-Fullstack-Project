const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const path = require("path")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const mongoose = require("mongoose")
const adsRoutes = require("./routes/ads.routes")
const authRoutes = require("./routes/auth.routes")
const errorHandler = require("./middleware/errorMiddleware")
const port = process.env.PORT || 8000

const app = express()

connectDB()

require("dotenv").config()

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  )
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create(mongoose.connection),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV == "production",
    },
  })
)

app.use("/api/ads", adsRoutes)
app.use("/api/auth", authRoutes)

app.use(express.static(path.join(__dirname, "/uploads/")))
app.use(express.static(path.join(__dirname, "/public")))

app.use(errorHandler)

app.use((req, res) => {
  res.status(404).json({ message: "Page not found" })
})
