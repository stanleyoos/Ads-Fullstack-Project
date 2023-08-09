const mongoose = require("mongoose")

const connectDB = () => {
  const NODE_ENV = process.env.NODE_ENV
  let dbUri = ""
  if (NODE_ENV === "production") dbUri = "remote address"
  else if (NODE_ENV === "test")
    dbUri = "mongodb://localhost:27017/AdsApplicationTest"
  else dbUri = "mongodb://localhost:27017/AdsApplication"

  // connects our backend code with the database
  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection

  db.once("open", () => {
    console.log("Connected to the database")
  })
  db.on("error", (err) => console.log("Error " + err))
}

module.exports = connectDB
