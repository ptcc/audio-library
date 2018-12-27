require("dotenv").config();
const express = require("express");
const app = express();
const songs = require("./songs");

app.use("/", express.static(__dirname));
app.use("/songs", songs);

app.get("/", (req, res) => res.send(["http://localhost:3000/songs"]))

// Start Listenin
app.listen(3000, function() {
  console.log("serving music library API on http://localhost:3000");
});
