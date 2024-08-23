const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')
const { Produtos } = require('../models/produto_categoria')


const imagens = sequelize.define('imagens', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produtos,
            key: 'id'
          },
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, {
    timestamps: true 
});

Produtos.hasMany(imagens, { foreignKey: 'product_id' });
imagens.belongsTo(Produtos);

module.exports = imagens