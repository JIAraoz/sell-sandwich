const routerProducts = require("express").Router()
const createProducts = require('../../controllers/controllerProducts/createProduct')
const { getProductById } = require("../../controllers/controllerProducts/getProductById")
const getProducts = require("../../controllers/controllerProducts/getProducts")
const {validateCreateProduct} = require('../../validations/createProduct')
const { validateGetProductById } = require("../../validations/getProductById")


routerProducts.post("/createProduct",validateCreateProduct,createProducts)
routerProducts.get("/getProducts",getProducts)
routerProducts.get("/getProductByID/:idProduct",validateGetProductById,getProductById)



module.exports = {
    routerProducts
}