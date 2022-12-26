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
// requiring new routes here

const query_route = require("./src/query_section/query_route.js");
const signupRoute = require('./src/signup/signup.route')
const BlogRouter = require('./src/blogs/blogs.route')
// allow middleware

app.use(parse.json());
app.use(express.json());
// setupping middleware for the routes here

app.use(query_route);
app.use(signupRoute);
app.use(BlogRouter)

//exporting the app module

module.exports = app;
