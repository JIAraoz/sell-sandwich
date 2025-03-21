const { addProductCart } = require('../../controllers/controllerCart/addProductCart')
const createCart = require('../../controllers/controllerCart/createCart')
const { getCartById } = require('../../controllers/controllerCart/getCartById')
const { updateIsActive } = require('../../controllers/controllerCart/updateIsActive')
const { validateAddCartProduct } = require('../../validations/Cart/addCartProduct')
const { validateCreateCart } = require('../../validations/Cart/createCart')
const { validateGetCartById } = require('../../validations/Cart/getCartById')
const { validateUpdateIsActive } = require('../../validations/Cart/updateIsActive')

const routerCart = require('express').Router()


routerCart.post('/createCart',validateCreateCart,createCart)
routerCart.post('/addCartProduct',validateAddCartProduct,addProductCart)
routerCart.get('/getCartById/:idCart',validateGetCartById,getCartById)
routerCart.put('/updateIsActive/:idCart',validateUpdateIsActive,updateIsActive)

module.exports = {routerCart}