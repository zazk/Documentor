require("dotenv").config({ path: "./.env" });

module.exports = {
  env: process.env.NODE_ENV || "development",
  database: {
    url: process.env.DB_HOST
  }
};
