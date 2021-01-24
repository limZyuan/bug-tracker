const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//config dot env
require("dotenv").config();

// Initialise the express app
const app = express();

// For deployment to ensure that refreshing the page works.
app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 1337;

app.listen(PORT, () =>
  console.log(
    `Server stared on port ${PORT}, NODE_ENV is ${process.env.NODE_ENV}`
  )
);
