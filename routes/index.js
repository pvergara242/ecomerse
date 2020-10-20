import { Router } from "express";
import validateToken from "../middlewares/auth";
import Coupons from "../controllers/coupons";
import ProductsController from "../controllers/Products";
import categories from "../controllers/categories";
import product_categories from "../controllers/Products_categories";


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
import { Model } from "sequelize";
import enviarCorreo from "../middlewares/nodemailer";

// controllers
import user from '../controllers/users';

module.exports = (app) => {
  // home view
  router.get("/", (req, res) => {
    console.log(res);
    res.send("esta el la ruta inicial");
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
  // router.post("/api/v1/users/reset-password", user.reset);
  // router.get("/timeout", home.error504);
  // router.get("*", home.error404);
  app.use(router);
};  

// crud coupons
crud.post("/api/v1/coupons", Coupons.register);
crud.get("/api/v1/coupons", Coupons.listAll);
crud.get("/api/v1/productos/:CouponsId", Coupons.getCoupon);
crud.put("/api/v1/productos/:CouponsId", Coupons.update);
crud.delete("/api/v1/productos/:CouponsId", Coupons.delete);


// crud productos 
crud.post("/api/v1/products", ProductsController.register);
crud.get("/api/v1/Products", ProductsController.listall);
crud.get("/api/v1/productos/:ProductsId", ProductsController.find);
crud.put("/api/v1/productos/:ProductsId", ProductsController.update);
crud.delete("/api/v1/productos/:ProductsId", ProductsController.delete);

// crud products-categories
crud.post("/api/v1/Products-categories", product_categories.register);
crud.get("/api/v1/Products-categories", product_categories.listall);
crud.get("/api/v1/productos/:Products-categoriesId", product_categories.find);
crud.put("/api/v1/productos/:Products-categoriesId", product_categories.update);
crud.delete("/api/v1/productos/:Products-categoriesId", product_categories.delete);

//crud transactions
crud.post("/api/v1/transactions", transactions.register);
crud.get("/api/v1/transactions",transactions.listall);
crud.get("/api/v1/productos/:transactionsId", transactions.find);
crud.put("/api/v1/productos/:transactionsId", transactions.update);
crud.delete("/api/v1/productos/:transactionsId", transactions.delete);

// crud categories
crud.post("/api/v1/categories", categories.register);
crud.get("/api/v1/categories",categories.listall);
crud.get("/api/v1/productos/:categoriesId", categories.find);
crud.put("/api/v1/productos/:categoriesId",categories.update);
crud.delete("/api/v1/productos/:categoriesId", categories.delete);

// crud orderProducts
crud.post("/api/v1/orderProducts", orderProducts.register);
crud.get("/api/v1/orderProducts",orderProducts.listall);
crud.get("/api/v1/productos/:orderProductsId", orderProducts.find);
crud.put("/api/v1/productos/:orderProductsId",orderProducts.update);
crud.delete("/api/v1/productos/:orderProductsId", orderProducts.delete);

// crud tags
crud.post("/api/v1/tags", tagsController.register);
crud.get("/api/v1/tags",tagsController.listall);
crud.get("/api/v1/productos/:tagsId", tagsController.find);
crud.put("/api/v1/productos/:tagsId",tagsController.update);
crud.delete("/api/v1/productos/:tagsId", tagsController.delete);

// Todo:
// agregar las dos realciones pendientes refrescar y migrar
// Revisar que todas las realciones esten 
// Crear los seeders
// Enviar el token en correo para poder recupar contrasena
// ENviar el correo aleatorio
// Agregar la recuperacion de contrasena
// verificar que no existan rutas repetidas
// Completar el flijo completo del auth
// Hacer el crud completo de User
// Crear el controlador de auth
// Desacoplar las rutas en 3 archivos
// Paginacion
// crud productsTags
crud.post("/api/v1/productsTags", productsTagsController.register);
crud.get("/api/v1/productsTags",productsTagsController.listall);
crud.get("/api/v1/productos/:productsTagsId", productsTagsController.find);
crud.put("/api/v1/productos/:productsTagsId",productsTagsController.update);
crud.delete("/api/v1/productos/:productsTagsId", productsTagsController.delete);

// crud 
// Todo:
// agregar las dos realciones pendientes de las tablas que existan refrescar y migrar =>orlando
// Revisar que todas las realciones esten OK =>orlando
// Crear los seeders =>orlando
// Enviar el token en correo para poder recupar contrasena =>jose
// Enviar el pasword aleatorio en el correo=>jose
// Agregar la recuperacion de contrasena agregando el link dinamico =>jose
// verificar que no existan rutas repetidas =>orlando
// Completar el flijo completo del auth =>todos para lo ultimo
// Hacer el crud completo de User get user/:id /users /user/delete /user/update =>paola
// Crear el controlador de auth =>paola
// Desacoplar las rutas en 3 archivos => todos a lo ultimo 
// Paginacion =>sergio
// asegurar que todo este con ES6 =>sergio
// variables de entorno=>orlando
