const { Product } = require("../../models/Products")
const updateIsActiveProduct = async(req, res) => {
    try {
        const {idProduct} = req.params
        const product = await Product.findByPk(idProduct)
        if(!product){
            return res.status(404).json({
                error:"Product not found"
            })
        }
        product.isActive = !product.isActive
        await product.save()
        return res.status(200).json({
            message:"Product was updated successfully",
            product
        })

    } catch (error) {
        console.log("Error updating Product " + error.message);
        res.status(500).json({
            error:"Internal Server Error",
            details:error.message
        })
        
    }
}

module.exports = {updateIsActiveProduct}