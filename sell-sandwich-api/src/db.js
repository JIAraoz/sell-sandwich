require("dotenv").config()
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL);

(async () => {
  try {
   
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos 🎉");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
})();





module.exports ={conn: sequelize};
const {Product} = require("./models/Products")
const {Cart} =require('./models/Cart')
const CartProducts = require('./models/CartProducts')

Product.belongsToMany(Cart,{ through: CartProducts})
Cart.belongsToMany(Product,{through: CartProducts})