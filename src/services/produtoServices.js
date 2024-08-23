const { Produtos } = require('../models/produto_categoria')
const { Categorias } = require('../models/produto_categoria')
const Imagens = require('../models/imagem')
const { Transaction } = require('sequelize')
const Opcoes = require('../models/opcoes')
const imagens = require('../models/imagem')

const list = async () => {
    const list = await Produtos.findAll(
        {include: [imagens,Opcoes]
        
        }
    )
    return list
}

const listId = async (req) => {
    const list = await Produtos.findByPk(req)
    return list
}


const create = async (productData) => {
    const produto = await Produtos.create(productData);
    console.log(produto, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    await produto.addCategorias(productData.category_ids)

    const imagens = productData.images
    const imagensADD = imagens.map(url =>({
        product_id: produto.id,
        path: url.content,
        enable: true
    }))

    await Imagens.bulkCreate(imagensADD, {Transaction})

    const opcoes = productData.options
    const opcoesAdd = opcoes.map(data => ({
        "product_id": produto.id,
        "title": data.title,
        "shape": data.shape,
        "radius": data.radius,
        "type": data.type,
        "values": data.values
    }))
    await Opcoes.bulkCreate(opcoesAdd)

}

const deletar = async (req) => {
    await Produtos.destroy({ where: { id: req } })
}

const update = async (id, data) => {
    await Produtos.update(data, { where: { id: id } })
}

module.exports = {
    list,
    listId,
    create,
    deletar,
    update
}