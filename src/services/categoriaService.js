const {Categorias} = require('../models/produto_categoria')

const list = async () => {
   const list = await Categorias.findAll()
   return list
}

const listId = async (req) => {
    const list = await Categorias.findByPk(req)
    return list
}

const create = async (req) => {
    await Categorias.create(req)
}

const deletar = async (req) => {
    await Categorias.destroy({where: {id: req}})
}

const update = async (id, data) => {
    await Categorias.update(data, {where: {id: id}})
}

module.exports = {
    list,
    listId,
    create,
    deletar,
    update
}