const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fs = require("fs");
const https = require("https");
const key = fs.readFileSync("localhost+2-key.pem", "utf-8");
const cert = fs.readFileSync("localhost+2.pem", "utf-8");

/*
const board = new Board({
  port: "/dev/cu.usbmodem1101"
});

board.on("ready", () => {

});
*/


var state = true;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Back end application" });
  console.log("Get request sent")
});

const PORT = process.env.PORT || 8080;


// set port, listen for requests
https.createServer({key, cert}, app).listen(8080, () =>{
  console.log("Server running with https at port " + PORT);
});
