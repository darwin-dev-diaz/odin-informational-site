// const http = require("http");
// const url = require("url");
const fs = require("fs");
const express = require("express");
require("dotenv").config();

function returnData(filePath) {
  return fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
}
const app = express();
app.get("/", (req, res) => {
  res.status(200);
  res.send(returnData("index.html"));
  res.end();
});
app.get("/about", (req, res) => {
  res.status(200);
  res.send(returnData("about.html"));
  res.end();
});
app.get("/contact-us", (req, res) => {
  res.status(200);
  res.send(returnData("contact-us.html"));
  res.end();
});
app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});
app.get("/:username/messages/:messageId", (req, res) => {
  console.log("Params", req.params);
  console.log("Query", req.query);
  res.end();
});
app.get("*", (req, res) => {
  res.status(404);
  res.send(returnData("404.html"));
  res.end();
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
