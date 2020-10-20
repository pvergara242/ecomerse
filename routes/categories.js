const { Router } = require('express');
const express = require('express');
const {create, read, update, deleteE} = require('../controllers/categories');
const { default: validateToken } = require('../middlewares/auth');

Router.post('/api/v1/categories', validateToken, create );