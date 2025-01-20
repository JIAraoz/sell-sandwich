const routerProducts = require("express").Router()
const createProducts = require('../../controllers/controllerProducts/createProduct')



routerProducts.post("/createProduct",createProducts)




module.exports = {
    routerProducts
}