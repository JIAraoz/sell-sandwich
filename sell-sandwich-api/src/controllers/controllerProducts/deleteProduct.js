const { Product } = require("../../models/Products")
const deleteProduct = async (req,res) => {
    try {
        const {idProduct} = req.params
        const product = await Product.findByPk(idProduct)
        if(product){
            product.isActive = false
            await product.save()
        }else{
            return res.stats(404).json({
                error:"Product not found"
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:"Internal Server Error",
            detail:error.message
        })
    }
}

module.exports = { deleteProduct }