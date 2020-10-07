const express = require("express");
const router = express.Router();
const { Users } = require("../models/index.js");

const { Model } = require("sequelize");

module.exports = (app) => {
  // home
  router.get("/", (req, res) => {
    res.send("esta el la ruta inicial");
  });

  // user

  app.post("/api/v1/users", async (request, response) => {
    let {
      first_name,
      last_name,
      email,
      active,
      token,
      password,
    } = request.body;
    console.log(first_name,
      last_name,
      email,
      active,
      token,
      password,)

    // const user = await Users.create({
    //   first_name,
    //   last_name,
    //   email,
    //   active,
    //   token,
    //   password,
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // });
    response.json({
      message: "Se ha agregado el usuario satisfactoriamente",
      user,
    });
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
