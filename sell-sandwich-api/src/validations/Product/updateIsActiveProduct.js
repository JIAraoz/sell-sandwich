const {param} = require('express-validator')
const {validateResult} = require('../../helpers/validateHelper')


const validateUpdateIsActiveProduct = [
    param("idProduct").exists()
    .withMessage("the idProduct must be a parameter")
    .isUUID()
    .withMessage("the idProduct must be an UUID")
    , (req, res, next) => validateResult(req, res, next)
]

module.exports = {validateUpdateIsActiveProduct}