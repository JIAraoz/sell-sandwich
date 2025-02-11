const routerProducts = require("express").Router()
const createProducts = require('../../controllers/controllerProducts/createProduct')
const { getProductById } = require("../../controllers/controllerProducts/getProductById")
const getProducts = require("../../controllers/controllerProducts/getProducts")
const {updateIsActiveProduct} = require("../../controllers/controllerProducts/updateIsActiveProduct")
const {validateCreateProduct} = require('../../validations/Product/createProduct')
const { validateGetProductById } = require("../../validations/Product/getProductById")
const { validateUpdateIsActiveProduct } = require("../../validations/Product/updateIsActiveProduct")


routerProducts.post("/createProduct",validateCreateProduct,createProducts)
routerProducts.get("/getProducts",getProducts)
routerProducts.get("/getProductByID/:idProduct",validateGetProductById,getProductById)
routerProducts.put("/updateIsActiveProduct/:idProduct",validateUpdateIsActiveProduct,updateIsActiveProduct)



module.exports = {
    routerProducts
}