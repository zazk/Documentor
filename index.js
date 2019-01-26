const express = require("express");
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
  require("./db");
  console.log("listening on http://localhost:3000");
});

app.get("/", (_, res) => {
  res.send("Hi awesome world");
});

router.get("/", (_, res) => {
  res.send("Here your api works");
});

router.get("/api", (_, res) => {
  res.send("Here your api works");
});

router.post("/contractors", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(req.body);
});
