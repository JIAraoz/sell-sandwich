const { param, body } = require("express-validator");
const { validateResult } = require("../../helpers/validateHelper");

const validateUpdateProduct = [
    param("idProduct")
        .exists().withMessage("The idProduct must be a parameter")
        .isUUID().withMessage("The idProduct must be a valid UUID"),

    body("name")
        .optional() 
        .isString().withMessage("The name must be a string")
        .notEmpty().withMessage("The name cannot be empty")
        .isLength({ min: 3, max: 100 }).withMessage("The name must be between 3 and 100 characters"),

    body("price")
        .optional() 
        .isFloat({ min: 0 }).withMessage("The price must be a positive number"),

    (req, res, next) => validateResult(req, res, next)
];

module.exports = { validateUpdateProduct };