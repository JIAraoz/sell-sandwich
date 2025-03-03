const routerProducts = require("express").Router()
const  {upload} = require("../../multer")

const createProducts = require('../../controllers/controllerProducts/createProduct')
const { getProductById } = require("../../controllers/controllerProducts/getProductById")
const getProducts = require("../../controllers/controllerProducts/getProducts")
const {updateIsActiveProduct} = require("../../controllers/controllerProducts/updateIsActiveProduct")
const { updateProduct } = require("../../controllers/controllerProducts/updateProduct")
const {validateCreateProduct} = require('../../validations/Product/createProduct')
const { validateGetProductById } = require("../../validations/Product/getProductById")
const { validateUpdateIsActiveProduct } = require("../../validations/Product/updateIsActiveProduct")
const { validateUpdateProduct } = require("../../validations/Product/updateProduct")


routerProducts.post("/createProduct",upload.single("image"),validateCreateProduct,createProducts)
routerProducts.get("/getProducts",getProducts)
routerProducts.get("/getProductByID/:idProduct",validateGetProductById,getProductById)
routerProducts.put("/updateIsActiveProduct/:idProduct",validateUpdateIsActiveProduct,updateIsActiveProduct)
routerProducts.put("/updateProduct/:idProduct",validateUpdateProduct,updateProduct)



module.exports = {
    routerProducts
}