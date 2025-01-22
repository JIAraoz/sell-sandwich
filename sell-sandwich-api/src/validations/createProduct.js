const {check} = require("express-validator")
const {validateResult} = require('../helpers/validateHelper')


const validateCreateProduct = [
    check('name').
    exists().
    notEmpty().withMessage("el nombre no puede estar vacio"),
    check('price').
    exists().
    isNumeric().not().isString().withMessage(" el precio debe ser un numero"),
    (req, res, next) =>{
        validateResult(req,res,next)
    }
]

module.exports = { validateCreateProduct }

