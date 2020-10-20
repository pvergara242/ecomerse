<<<<<<< HEAD
const { Router } = require('express');
const express = require('express');
const {create, read, update, deleteE} = require('../controllers/categories');
const { default: validateToken } = require('../middlewares/auth');

Router.post('/api/v1/categories', validateToken, create );
=======

import {Router} from 'express'
const router = Router();

// crud categories
router.post("/api/v1/categories", categories.register);
router.get("/api/v1/categories",categories.listall);
router.get("/api/v1/productos/:categoriesId", categories.find);
router.put("/api/v1/productos/:categoriesId",categories.update);
router.delete("/api/v1/productos/:categoriesId", categories.delete);
>>>>>>> 72054dc8d0b099d11a9651c96954905fc64169e0
