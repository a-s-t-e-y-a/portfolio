const express = require("express");
const app = express();

// requiring path and other modularties

const path = require("path");
const parse = require("body-parser");
const cors = require("cors");

//cors setupped scussefully

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// allow middleware

app.use(parse.json());
app.use(express.json());

//exporting the app module

module.exports = app;
