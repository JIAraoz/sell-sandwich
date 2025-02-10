const { addProductCart } = require('../../controllers/controllerCart/addProductCart')
const createCart = require('../../controllers/controllerCart/createCart')
const { getCartById } = require('../../controllers/controllerCart/getCartById')
const { validateAddCartProduct } = require('../../validations/addCartProduct')
const { validateCreateCart } = require('../../validations/createCart')
const { validateGetCartById } = require('../../validations/getCartById')

const routerCart = require('express').Router()


routerCart.post('/createCart',validateCreateCart,createCart)
routerCart.post('/addCartProduct',validateAddCartProduct,addProductCart)
routerCart.get('/getCartById/:idCart',validateGetCartById,getCartById)

module.exports = {routerCart}