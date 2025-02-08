const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateAddCartProduct = [
  check("idCart")
    .exists()
    .notEmpty().withMessage("The idCart cannot be empty")
    .isUUID().withMessage("idCart must be a valid UUID"),
  
  check("idProduct")
    .exists()
    .notEmpty().withMessage("The idProduct cannot be empty")
    .isUUID().withMessage("idProduct must be a valid UUID"),
  
  check("quantity")
    .exists()
    .notEmpty().withMessage("The quantity cannot be empty")
    .isNumeric().withMessage("The quantity must be a number"),
  
  (req, res, next) => validateResult(req, res, next)
];

module.exports = { validateAddCartProduct };