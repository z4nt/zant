const express = require('express')
const Controller = require('../controllers/categoriaController')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')

router.get('/search',auth.authentication, Controller.list)
router.get('/:id',auth.authentication, Controller.listId)
router.post('',auth.authentication,Controller.create)
router.put('/:id',auth.authentication,Controller.update)
router.delete('/:id',auth.authentication,Controller.deletar)

module.exports = router


// function chuchu(){
//     fetch('http://localhost:10000/v1/user', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             firstname: 'chuchu',
//             surname: 'chuchu',
//             email: 'chuchu',
//             password: 'chuchu'
//         }),
//     }).then((res)=>res.json()).then((data)=>console.log(data))
// }