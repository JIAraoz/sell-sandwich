const { DataTypes } = require("sequelize")
const {conn} = require("../db")
const Cart = conn.define("Cart",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isActive:{

        type:DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull:false
    }
})

module.exports={Cart}