const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produtos = sequelize.define('produtos',{
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false 
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  slug: {
      type: DataTypes.STRING,
      allowNull: false
  },
  use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
  },
  stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
  },
  description: {
      type: DataTypes.STRING,
      allowNull: true
  },
  price: {
      type: DataTypes.FLOAT,
      allowNull: false, 
  },
  price_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: false
  }
},{
   timestamps:true
})


const Categorias = sequelize.define('categorias', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  slug: {
      type: DataTypes.STRING,
      allowNull: false
  },
  use_in_menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }
}, {
  timestamps: true 
});


Produtos.belongsToMany(Categorias, { through: 'ProdutoCategoria', foreignKey: 'Product_Id'});
Categorias.belongsToMany(Produtos, { through: 'ProdutoCategoria', foreignKey: 'Categoria_Id'});



module.exports = {Produtos,
  Categorias
};
