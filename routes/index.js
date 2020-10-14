const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateToken = require("../middlewares/auth");
const { Users } = require("../models/index.js");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const enviarCorreo = require('../middlewares/nodemailer');

// requiereroutresa
const usersRouter= require('../routes/usersRoutes')



module.exports = (app) => {
  // app.post('/api/v1/enviar-correo',(req,res)=>{
  //   enviarCorreo();
  //   res.json({
  //     message: 'el correo se ha enviado satisfactoriamente'
  //   })
  // })
  // ------------------------------------------------
  // home
  app.get("/", (req, res) => {
    // res.send("esta el la ruta inicial");

    let clave = process.env.JWT_SECRET || "sergio";
    console.log(clave);
    res.json({
      message: "el clave secreta es:",
      clave,
    });
  });
 //Token validation middlewares
 app.use(validateToken);
  
  // router.get("/timeout", home.error504);
  // router.get("*", home.error404);

  app.use(router);
};
