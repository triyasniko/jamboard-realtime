const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path")

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "OK",
//     message: "Hello World",
//   });
// });

module.exports = app;
