const routes = require('express').Router();
const {routerProducts} = require('./detailRoutes/routerProducts')



routes.use('/products',routerProducts)


module.exports = {routes}