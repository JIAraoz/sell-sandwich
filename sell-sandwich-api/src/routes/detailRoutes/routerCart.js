const { addProductCart } = require('../../controllers/controllerCart/addProductCart')
const createCart = require('../../controllers/controllerCart/createCart')
const { validateAddCartProduct } = require('../../validations/addCartProduct')
const { validateCreateCart } = require('../../validations/createCart')

const routerCart = require('express').Router()


routerCart.post('/createCart',validateCreateCart,createCart)
routerCart.post('/addCartProduct',validateAddCartProduct,addProductCart)

module.exports = {routerCart}