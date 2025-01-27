 const { check } = require('express-validator')
 const {validateResult} = require('../helpers/validateHelper')


 const validateCreateCart = [
    check('name').exists().notEmpty().withMessage("the name cannot be empty").isString().withMessage('the name must be a string'),
    (req,res) =>{
        validateResult(req,res)
    }
 ]



 module.exports = {validateCreateCart}