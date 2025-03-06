const { Product } = require("../../models/Products");

const createProduct = async (req, res) => {
    try {

        const { name, price } = req.body;
        console.log("ESTE ES LO Q ESTA LLEGNADO AL SERVEREEEEEEEEEEEE" + req.file);
        
        const image = `uploads/${req.file.filename}` 
        const product = await Product.create({ name, price, image });


        return res.status(201).json({
            message: "Product created successfully.",
            product,
          });

    } catch (error) {
        console.error("Error creating product:", error);


        return res.status(500).json({
            error: "Internal server error. Please try again later.",
            details: error.message,
        });
    }
};

module.exports = createProduct;
