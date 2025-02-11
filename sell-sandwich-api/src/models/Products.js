const { DataTypes} = require("sequelize")
const {conn} = require("../db")
const Product = conn.define('Product',{
    id:{
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name:{
       type:DataTypes.STRING,
       allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull:false
    }

})

module.exports={Product}