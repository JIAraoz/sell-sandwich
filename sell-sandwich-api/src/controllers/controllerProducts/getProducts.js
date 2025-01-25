const {Product} = require('../../models/Products')
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        return res.status(200).json({ products: products || [] });

    } catch (error) {
       
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
            details: error.message,
        });
    }
};

module.exports = getProducts;
