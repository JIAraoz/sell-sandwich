const {Product} = require("../../models/Products")
const updateProduct = async (req, res) => {
try {
    const updatedFields = req.body
    const {idProduct} = req.params
    const [updateRows] = await Product.update(updatedFields,{
        where:{
            id:idProduct
        }
    })
    if(updateRows == 0){
        return res.status(404).json({
            error:"Product not found or not updated"
        })
    }
    const product = await Product.findByPk(idProduct)
    return res.status(200).json({
        message:"Product was updated successfully"
        ,product
    })
} catch (error) {
    console.log("Error updating Product " + error.message);
        res.status(500).json({
            error:"Internal Server Error",
            details:error.message
        })
}
}


module.exports = { updateProduct }