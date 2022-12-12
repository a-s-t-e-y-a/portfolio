const express = require("express");
const { query_controller } = require("./query_controller");
const query_route = express.Router();
query_route.post("/query", query_controller);
module.exports = query_route;
