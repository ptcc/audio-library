require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const songs = require("./songs");


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  
  next();
});

app.use(morgan("dev"))

app.use("/", express.static(__dirname,{
  redirect: false
}));
app.use("/songs", songs);

app.get("/", (req, res) => res.send(["http://localhost:4000/songs"]));

// Start Listenin
app.listen(4000, function() {
  console.log("serving music library API on http://localhost:4000");
});
