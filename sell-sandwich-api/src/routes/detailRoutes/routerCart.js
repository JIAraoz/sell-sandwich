const createCart = require('../../controllers/controllerCart/createCart')
const { validateCreateCart } = require('../../validations/createCart')

const routerCart = require('express').Router()


routerCart.post('/createCart',validateCreateCart,createCart)


module.exports = {routerCart}