const {check} = require("express-validator")
const {validateResult} = require('../helpers/validateHelper')


const validateCreateProduct = [
    check('name').
    exists().
    notEmpty().withMessage("the name cannot be empty"),
    check('price').
    exists().
    isNumeric().not().isString().withMessage("the price must be a number"),
    (req, res, next) =>{
        validateResult(req,res,next)
    }
]

module.exports = { validateCreateProduct }

