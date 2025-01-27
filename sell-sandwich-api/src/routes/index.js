const routes = require('express').Router();
const { routerCart } = require('./detailRoutes/routerCart');
const {routerProducts} = require('./detailRoutes/routerProducts')



routes.use('/products',routerProducts)
routes.use('/cart',routerCart)

module.exports = {routes}