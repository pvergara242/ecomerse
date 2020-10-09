const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateToken = require("../middlewares/auth");
const { Users } = require("../models/index.js");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (app) => {
  // user
  // Create user Register user
  app.post("/api/v1/users", async (request, response) => {
    // let secret = process.env.JWT_SECRET || "orlando"
    // console.log(secret)
    let {
      first_name,
      last_name,
      email,
      active,
      token,
      password,
    } = request.body;
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    const user = await Users.create({
      first_name,
      last_name,
      email,
      active,
      token,
      password: passwordEncrypted,
      created_at: new Date(),
      updated_at: new Date(),
    });
    console.log(user);
    response.json({
      message: "Se ha agregado el usuario satisfactoriamente",
      user,
    });
  });
  // login
  app.post("/api/v1/users/login", async (request, response) => {
    const { email, password } = request.body;
    let secret = process.env.JWT_SECRET || "orlando";
    let user = await Users.findOne({ where: { email: email } });
    if (user) {
      bcrypt.compare(password, user.password, function (err, res) {
        if (err || res === false) {
          response
            .status(401)
            .json({ message: "las credenciales son incorrectas" });
        } else {
          const token = jwt.sign(
            { id: user.id, email: user.email, password: user.password },
            secret,
            { expiresIn: "1h" }
          );
          response.json({
            message: "has iniciado sesion correctamente",
            token: token,
          });
        }
      });
    } else {
      response.status(401).json({
        message: "no existe el usuario con el mismo correo ingresado",
      });
    }
  });

  //  enviar correo nodemeiler route

  // ------------------------------------------------
  //Token validation middlewares
  app.use(validateToken);

  // home
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
  app.get("/api/v1/users/:id", async (request, response) => {
    const userId = request.params.id;
    const users = await Users.findOne({
      where: {
        id: userId,
      },
    });
    response.json(users);
  });

  //  Editar  User
  app.put("/api/v1/users/:id", async (request, response) => {
    let userId = request.params.id;
    let {
      first_name,
      last_name,
      email,
      active,
      token,
      password,
    } = request.body;
    try {
      const users = await Users.update(
        {
          first_name,
          last_name,
          email,
          active,
          token,
          password,
          updated_at: new Date(),
        },
        {
          returning: true,
          where: {
            id: userId,
          },
        }
      );
      const user = users[1][0].dataValues;
      response.json(user);
    } catch (error) {
      response
        .status(400)
        .json({ message: "No se ha podido actualizar el registro" });
    }
  });

  // List all users
  app.get("/api/v1/users", async (request, response) => {
    const users = await Users.findAll();
    response.json({ results: users });
  });

  // ELiminar user
  app.delete("/api/v1/users/:id", async (request, response) => {
    let userId = request.params.id;
    let decoded = jwt.verify(request.token, process.env.JWT_SECRET);
    try {
      let user = await Users.findOne({
        where: {
          id: userId,
        },
      });
      if (decoded.id !== Number(userId) && user) {
        await Users.update(
          { active: false },
          {
            where: {
              id: userId,
            },
          }
        );
        response.json({ message: "La cuenta ha sido desactivada" });
      } else {
        response
          .status(400)
          .json({ message: "Hubo un error al tratar de desactivar la cuenta" });
      }
    } catch (error) {
      response
        .status(400)
        .json({ message: "Hubo un error al tratar de desactivar la cuenta" });
    }
  });

  // rest pasword
  router.post("/api/v1/users/reset-password", (req, res) => {
    console.log(req);
    res.json({
      data: {},
      message: "something goes wrong in password",
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
