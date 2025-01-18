const { DataTypes } = require("sequelize");
const { conn } = require("../db");

const CartProducts = conn.define("CartProducts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Define una cantidad predeterminada.
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = CartProducts;