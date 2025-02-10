const {Cart} = require("../../models/Cart")
const {Product} = require("../../models/Products")
const getCartById = async (req,res) => {
try {
    const {idCart}= req.params
    const cart = await Cart.findByPk(idCart,{
        include:{
            model:Product,
            attributes:['id','name','price'],
            through: { attributes: ["quantity",'price'] }
        },
       
    })

    if(!cart){
        return res.status(404).json({
            error:"Cart not found"
        })
    }

    return res.status(200).json({
        cart,
        message:"Cart was found successfully"
    })

} catch (error) {
    console.log(error);
    
    return res.status(500).json({
        error: "Internal server error. Please try again later.",
        details: error.message,
    });
}
}

module.exports = {getCartById}