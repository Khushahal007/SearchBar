require('dotenv').config();
const mongoose = require("mongoose");


// const mongoURL = process.env.MONGO_URI;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connect successfull");
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

var db = mongoose.connection;

db.on("error", () => {
  console.log("Mongo db connection failed");
});

module.exports = mongoose;