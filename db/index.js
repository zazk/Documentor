const mongoose = require("mongoose");
const config = require("../config");

mongoose.Promise = global.Promise;
const conn = mongoose.connect(
  config.database.url,
  { useNewUrlParser: true }
);

conn.then(db => {
  console.log(
    `Connected to ${config.database.url} MongoDB in ${config.env} mode.`
  );
  return db;
});

mongoose.connection.on("error", err => {
  if (err.message.code === "ETIMEDOUT") {
    console.log("Attempting to re-establish database connection.");
    mongoose.connect(config.database.url);
  } else {
    console.error("Error when trying to connect to database:");
    console.error(err);
  }
});

module.exports = conn;
