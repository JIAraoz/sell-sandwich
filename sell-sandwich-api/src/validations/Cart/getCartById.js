const {param} = require('express-validator')
const {validateResult} = require('../helpers/validateHelper')


const validateGetCartById = [
    param("idCart").exists()
    .withMessage("the idCart must be a parameter")
    .isUUID()
    .withMessage("the idCart must be an UUID")
    , (req, res, next) => validateResult(req, res, next)
]

module.exports = {validateGetCartById}