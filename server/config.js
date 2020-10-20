import express, { json } from "express";
import morgan from "morgan";
import path from "path";
// import routes from 'Routes'
// const express = require("express");
// const morgan = require("morgan");
// const path = require("path");

const routes = require("../routes/index");

const config = (app) => {
  // Configuration
  app.set("port", process.env.PORT || 8000);
  app.use(express.urlencoded({ extended: false }));
  app.use(json());

  app.use(morgan("dev"));
  // Static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  // Routes from /routes index
  routes(app);
  return app;

  // Error router
};
export default config;
