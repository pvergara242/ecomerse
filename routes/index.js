const express = require("express");
const router = express.Router();

module.exports = (app) => {
  // home
  router.get("/", (req, res) => {
    res.send("esta el la ruta inicial");
  });

  // .POST → api/v1/users/loginb
  router.post("/api/v1/users/loginb", (req, res) => {
    console.log(req);
    res.json({
      data: {},
      message: "something goes wrong",
    });
  });
  // .POST → api/v1/users/reset-passwordc

  router.post("/api/v1/users/reset-passwordc", (req, res) => {
    console.log(req);
    res.json({
      data: {},
      message: "something goes wrong in passwordc",
    });
  });
  // .POST → api/v1/users/update-password
  router.post("/api/v1/users/update-password", (req, res) => {
    console.log(req);
    res.json({
      data: {},
      message: "something goes wrong on update pasword",
    });
  });
  // router.get("/timeout", home.error504);
  // router.get("*", home.error404);

  app.use(router);
};
