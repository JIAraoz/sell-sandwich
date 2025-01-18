const { DataTypes } = require("sequelize")
const {conn} = require("../db")
const Cart = conn.define("Cart",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
    }
})