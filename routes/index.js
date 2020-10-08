const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateToken = require("../middlewares/auth");
const { Users } = require("../models/index.js");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");


module.exports = (app) => {
  // home
  router.get("/", (req, res) => {
    res.send("esta el la ruta inicial");
  });

  // user
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
      password:passwordEncrypted,
      created_at: new Date(),
      updated_at: new Date(),
    });
    console.log(user);
    response.json({
      message: "Se ha agregado el usuario satisfactoriamente",
      user,
    });
  });

  
app.post('/api/v1/users/login', async (request,response)=>{
  const  {email,password} = request.body;
  let secret = process.env.JWT_SECRET || "orlando"
  let user = await Users.findOne({where:{email:email}});
  if(user){
      bcrypt.compare(password, user.password, function(err,res){
          if(err || res === false){
              response.status(401).json({message:"las credenciales son incorrectas"})
          }else{
              const token = jwt.sign({id:user.id,email:user.email,password:user.password},secret,{expiresIn:'30m'})
              response.json({message: "has iniciado sesion correctamente",token:token});
          }
      })  
  }else{
      response.status(401).json({message:"no existe el usuario con el mismo correo ingresado"})
  }
  
})
app.use(validateToken);

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
