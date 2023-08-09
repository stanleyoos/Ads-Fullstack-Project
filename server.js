const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const adsRoutes = require("./routes/ads.routes")
const authRoutes = require("./routes/auth.routes")
const errorHandler = require("./middleware/errorMiddleware")
const port = process.env.PORT || 8000

const app = express()

connectDB()

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/ads", adsRoutes)
app.use("/api/auth", authRoutes)

app.use(errorHandler)

app.use((req, res) => {
  res.status(404).json({ message: "Page not found" })
})
