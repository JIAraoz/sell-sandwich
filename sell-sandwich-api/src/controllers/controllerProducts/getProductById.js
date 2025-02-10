const {Product} = require("../../models/Products")



const getProductById = async(req, res) =>{
 try {
    const {idProduct} = req.params
    const product = await Product.findByPk(idProduct)
    if(!product){
        return res.status(404).json({
            error:"product not found"
        }
        )
    }
    
    return res.status(200).json({
        message:"Product was found successfully",
        product
    })

 } catch (error) {
    console.log(error);
    res.status(500).json({
        error:"Internal Server Error",
        details:error.message
    })
    
 }
}

module.exports = {getProductById}