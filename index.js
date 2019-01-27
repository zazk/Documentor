const express = require("express");
const config = require("./app/config");
const api = express();
const router = express.Router();

api.use(express.urlencoded({ extended: false }));
api.use(express.json());
api.use("/api", router);

api.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
});
api.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("error", { error: err });
});

api.listen(config.server.port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  require("./app/db");
  require("./app/routes/contact")(api);
  console.log("listening on http://localhost:3000");
});

api.get("/", (_, res) => {
  res.send("Hi awesome world");
});

router.get("/", (_, res) => {
  res.send("Here your api works");
});

router.get("/api", (_, res) => {
  res.send("Here your api works");
});

module.exports = api;
