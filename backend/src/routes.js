const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const ProductController = require('./controllers/ProductController');
const CartController = require('./controllers/CartController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);
routes.post('/sessions/auth', SessionController.login);

routes.post('/products', upload.single('imagem'), ProductController.store);
routes.get('/products', ProductController.index);
routes.delete('/products', ProductController.delete);

routes.post('/products/:product_id/cart', CartController.store);
routes.get('/cart', CartController.show);
routes.post('/cart', CartController.delete);

module.exports = routes;