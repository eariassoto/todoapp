var express = require('express');
var router = express.Router();

// logica de las rutas
var auth = require('./auth.js');
var products = require('./products.js');
var user = require('./users.js');

/*
 * Rutas accesibles a cualquiera
 */
router.post('/login', auth.login);

/*
 * Rutas accesibles para usuarios autenticados
 */
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);

/*
 * Rutas accesibles solo para usuarios con permisos de admin
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;