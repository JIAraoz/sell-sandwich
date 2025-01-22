const routerProducts = require("express").Router()
const createProducts = require('../../controllers/controllerProducts/createProduct')
const {validateCreateProduct} = require('../../validations/createProduct')


routerProducts.post("/createProduct",validateCreateProduct,createProducts)




module.exports = {
    routerProducts
}