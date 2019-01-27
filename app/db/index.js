const mongoose = require("mongoose");
const config = require("../config");
const mongo = mongoose.connection;

mongoose.Promise = global.Promise;
const conn = mongoose.connect(
  config.database.url,
  { useCreateIndex: true, useNewUrlParser: true }
);

mongo.on("connected", () => console.log(`DB Connected in ${config.env} mode`));
mongo.on("error", err => {
  if (err.message.code === "ETIMEDOUT") {
    console.log("Attempting to re-establish database connection.");
    mongoose.connect(config.database.url);
  } else {
    console.error("Error when trying to connect to database:");
    console.error(err);
  }
});
mongo.on("disconnected", () => console.log("mongo: Disconnected"));

module.exports = conn;
