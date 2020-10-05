const express = require("express");
const path = require("path");
const routes = require("../routes/index");

module.exports = (app) => {
  // Configuration
  app.set("port", process.env.PORT || 3000);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  // Routes from /routes index
  routes(app);
  return app;

  // Error router pondding
};
