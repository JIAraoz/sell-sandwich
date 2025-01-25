const routerProducts = require("express").Router()
const createProducts = require('../../controllers/controllerProducts/createProduct')
const getProducts = require("../../controllers/controllerProducts/getProducts")
const {validateCreateProduct} = require('../../validations/createProduct')


routerProducts.post("/createProduct",validateCreateProduct,createProducts)
routerProducts.get("/getProducts",getProducts)



module.exports = {
    routerProducts
}