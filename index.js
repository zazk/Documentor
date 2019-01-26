const express = require("express");
const app = express();

app.listen(3000, () => console.log("listening on localhost:3000"));
app.get("/", (_, res) => {
  res.send("Hi awesome world");
});

app.get("/api", (_, res) => {
  res.send("Here your api works");
});
