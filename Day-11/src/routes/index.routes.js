const express = require("express");

const routes = express.Router();

routes.use((req, res, next) => {
  console.log("Middleware is running between routes and API");
  next();
});

routes.get("/", (req, res) => {
  res.json({ message: "Welcome to middleware!" });
});

module.exports = routes;
