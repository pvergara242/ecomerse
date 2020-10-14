const express = require("express");
const path = require("path");
const routes = require("../routes/index");
const morgan = require("morgan");


module.exports = (app) => {
  // Configuration
  app.set("port", process.env.PORT || 8000);
  app.use(express.urlencoded({
    extended: false
  }));
  app.use(express.json());

  // midlewares
  app.use(morgan("dev"));

  // Static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  // Routes from /routes index
  routes(app);
  return app;

 
};