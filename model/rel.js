const Usuarios = require('./Usuarios');
const Produtos = require('./Produtos');
const Compras = require('./Compras');

Usuarios.hasMany(Compras, { foreignKey: 'usuarioId' });
Compras.belongsTo(Usuarios, { foreignKey: 'usuarioId' });

Compras.belongsToMany(Produtos, { through: 'CompraProduto', foreignKey: 'compraId' });
Produtos.belongsToMany(Compras, { through: 'CompraProduto', foreignKey: 'produtoId' });

module.exports = {
    Usuarios,
    Produtos,
    Compras
}