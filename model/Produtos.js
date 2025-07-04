const {DataTypes} = require('sequelize');
const sequelize = require('../db/conn');
const Produtos = sequelize.define('Produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true, 
    }
}, {
    timestamps: false, 
    tableName: 'produtos' 
});

module.exports = Produtos;






