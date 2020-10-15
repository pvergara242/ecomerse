import {Router} from 'express'
import validateToken  from "../middlewares/auth";

// const express = require("express");
// import bcrypt from 'bcryptjs'
const router = Router();
// const validateToken = require("../middlewares/auth");
// const jwt = require("jsonwebtoken");
// const { Users } = require("../models/index.js");
// const bcrypt = require("bcryptjs");
// const { Model } = require("sequelize");
// const enviarCorreo = require("../middlewares/nodemailer");
// const user = require("../controllers/users");
// Middlewares
import {Model} from "sequelize"
import enviarCorreo from "../middlewares/nodemailer";

// controllers
import user from '../controllers/users';



module.exports = (app) => {
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
// send email test
  app.post("/api/v1/enviar-correo", (req, res) => {
    enviarCorreo();
    res.json({
      message: "el correo se ha enviado satisfactoriamente",
    });
  });
// user
  // Create user Register user
  app.post("/api/v1/users", user.register);
  // login
  app.post("/api/v1/users/login", user.login);
  // resetear user pasword
  app.post("/api/v1/users/reset-password", user.reset);
  // update-password
  router.post("/api/v1/users/update-password", user.update);
  //Token validation middlewares
  app.use(validateToken);
  //  get one user
  app.get("/api/v1/users/:id", user.getUser);
  //  Editar  User
  app.put("/api/v1/users/:id", user.edit);
  // List all users
  app.get("/api/v1/users", user.listAll);
  // ELiminar user
  app.delete("/api/v1/users/:id", user.deleteUser);
  // reset pasword
  router.post("/api/v1/users/reset-password", user.reset);
  // router.get("/timeout", home.error504);
  // router.get("*", home.error404);
  app.use(router);
};
