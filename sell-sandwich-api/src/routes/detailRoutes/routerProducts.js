const routerProducts = require("express").Router()
const  {upload} = require("../../multer")

const createProducts = require('../../controllers/controllerProducts/createProduct')
const { getProductById } = require("../../controllers/controllerProducts/getProductById")
const getProducts = require("../../controllers/controllerProducts/getProducts")
const { deleteAllImages } = require("../../controllers/controllerProducts/deleteAllImages")
const { updateProduct } = require("../../controllers/controllerProducts/updateProduct")
const { deleteProduct } = require("../../controllers/controllerProducts/deleteProduct")

const {validateCreateProduct} = require('../../validations/Product/createProduct')
const { validateGetProductById } = require("../../validations/Product/getProductById")
const { validateUpdateProduct } = require("../../validations/Product/updateProduct")
const { validateDeleteProduct } = require("../../validations/Product/deleteProduct")

routerProducts.delete("/deleteProduct/:idProduct",validateDeleteProduct,deleteProduct)
routerProducts.post("/createProduct",upload.single("image"),validateCreateProduct,createProducts)
routerProducts.get("/getProducts",getProducts)
routerProducts.get("/getProductByID/:idProduct",validateGetProductById,getProductById)
routerProducts.put("/updateProduct/:idProduct",validateUpdateProduct,updateProduct)
routerProducts.get("/deleteAllImages",deleteAllImages )



module.exports = {
    routerProducts
}