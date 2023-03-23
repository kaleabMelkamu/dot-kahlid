//---- step : 1.1
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
app.use(express.json())
//---- step : 2.3 last ma file crate garne time
// app.use("/images", express.static(path.join(__dirname, "/images")))

//---- step : 1.3
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*  useCreateIndex: true,
    useFindAndModify: true,*/
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))





//---- step : 1.2
app.listen("6000", () => {
  console.log("backend running...okay")
})