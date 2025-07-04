const {DataTypes} = require('sequelize');
const sequelize = require('../db/conn');

const Compras = sequelize.define('Compras', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: true, // Pode ser nulo se não houver desconto
    },
    finalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false, // Calculado com base em unitPrice e discountPercentage
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    purchaseStatus: {
        type: DataTypes.STRING,
        allowNull: false, // Exemplo de status pode ser "Pendente", "Completo", "Cancelado"
    }
}, {
    timestamps: false, // Desativa os campos createdAt e updatedAt
    tableName: 'compras' // Nome da tabela no banco de dados
});

module.exports = Compras;

