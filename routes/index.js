const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateToken = require("../middlewares/auth");
const { Users } = require("../models/index.js");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const enviarCorreo = require("../middlewares/nodemailer");

module.exports = (app) => {
  // user
  // Create user Register user
  app.post("/api/v1/users", async (request, response) => {});
  // login
  app.post("/api/v1/users/login", async (request, response) => {});

  app.post("/api/v1/enviar-correo", (req, res) => {
    enviarCorreo();
    res.json({
      message: "el correo se ha enviado satisfactoriamente",
    });
  });

  // resetear user pasword
  app.post("/api/v1/users/reset-password", async (req, res) => {});

  // update-password
  router.post("/api/v1/users/update-password", (req, res) => {});

  // ------------------------------------------------
  //Token validation middlewares
  app.use(validateToken);

  // home view
  router.get("/", (req, res) => {
    // res.send("esta el la ruta inicial");

    let clave = process.env.JWT_SECRET || "sergio";
    console.log(clave);
    res.json({
      message: "el clave secreta es:",
      clave,
    });
  });

  //  get one user
  app.get("/api/v1/users/:id", async (request, response) => {});

  //  Editar  User
  app.put("/api/v1/users/:id", async (request, response) => {});

  // List all users
  app.get("/api/v1/users", async (request, response) => {});

  // ELiminar user
  app.delete("/api/v1/users/:id", async (request, response) => {});

  // reset pasword
  router.post("/api/v1/users/reset-password", (req, res) => {});

  // router.get("/timeout", home.error504);
  // router.get("*", home.error404);

  app.use(router);
};
