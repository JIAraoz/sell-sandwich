const {Cart} = require('../../models/Cart')



const createCart = async (req,res) => {
 try {
    const {name} = req.body
    const cart = Cart.create({name})
 } catch (error) {
    console.error("Error creating cart:", error);


        return res.status(500).json({
            error: "Internal server error. Please try again later.",
            details: error.message,
        });
 }
}

module.exports = createCart