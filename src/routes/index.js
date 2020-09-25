const express = require("express");
const router = express.Router();


module.exports = app => {
    // Index or single pages routes
 
    // Error router
    // router.get("/timeout", home.error504);
    // router.get("*", home.error404);
  
    app.use(router);
  };