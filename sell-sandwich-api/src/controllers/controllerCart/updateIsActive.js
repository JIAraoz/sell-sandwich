const { Cart } = require("../../models/Cart")

const updateIsActive = async(req, res) => {
    try {
        const {idCart} = req.params
        const cart = await Cart.findByPk(idCart)
        if(!cart){
            return res.status(404).json({
                error:"Cart not found"
            })
        }
        cart.isActive = !cart.isActive
        await cart.save()
        return res.status(200).json({
            cart,
            message:"Cart updated successfully"
        })
    } catch (error) {
        console.error('Error updating cart:', error.message);  
        return res.status(500).json({
            error:"Internal Server Error",
            details:error.message
        })
        
    }
}

module.exports = {updateIsActive}