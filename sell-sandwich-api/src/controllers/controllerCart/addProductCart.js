const { Product } = require("../../models/Products");
const CartProducts = require("../../models/CartProducts");

const addProductCart = async (req, res) => {
  try {
    const { idCart, idProduct, quantity } = req.body;
    const validQuantity = Math.max(quantity, 1);

    const product = await Product.findByPk(idProduct);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cartProduct = await CartProducts.findOne({
      where: { CartId: idCart, ProductId: idProduct },
    });

    if (cartProduct) {
      await cartProduct.increment("quantity", { by: validQuantity });
      await cartProduct.reload();
      cartProduct.price = cartProduct.quantity * product.price;
      await cartProduct.save();
    } else {
      cartProduct = await CartProducts.create({
        CartId: idCart,
        ProductId: idProduct,
        quantity: validQuantity,
        price: validQuantity * product.price,
      });
    }

    return res.status(200).json({ message: "Product added to cart", cartProduct });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addProductCart };