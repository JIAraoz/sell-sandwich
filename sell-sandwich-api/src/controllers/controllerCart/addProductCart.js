const { Cart } = require("../../models/Cart");
const { Product } = require("../../models/Products");
const CartProducts = require("../../models/CartProducts");

const addProductCart = async (req, res) => {
  try {
    const { idCart, idProduct, quantity } = req.body;

    // Find the cart
    const cart = await Cart.findByPk(idCart);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Find the product
    const product = await Product.findByPk(idProduct);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if the product is already in the cart
    let cartProduct = await CartProducts.findOne({
      where: { cartId: idCart, productId: idProduct }
    });

    if (cartProduct) {
      // If the product is already in the cart, increase the quantity
      cartProduct.quantity += quantity;
      await cartProduct.save();
    } else {
      // Add the product to the cart
      cartProduct = await CartProducts.create({
        cartId: idCart,
        productId: idProduct,
        quantity,
        price: product.price, // Price is taken from the database to prevent manipulation
      });
    }

    return res.status(200).json({ message: "Product added to cart", cartProduct });

  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addProductCart };