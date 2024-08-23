const express = require('express')
const Controller = require('../controllers/produtoController')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')


router.get('/search', auth.authentication,Controller.list)
router.get('/:id', auth.authentication,Controller.listId)
router.post('', auth.authentication,Controller.create)
router.put('/:id',auth.authentication,Controller.update)
router.delete('/:id', auth.authentication,Controller.deletar)

module.exports = router