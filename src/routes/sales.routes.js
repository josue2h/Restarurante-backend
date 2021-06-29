const { Router } = require('express')
const route = Router()

const salesCtrl = require('../controllers/sales.controller')

route.get('/', salesCtrl.getSales)

route.post('/', salesCtrl.createSale)

route.get('/:id', salesCtrl.getSale)

route.put('/:id', salesCtrl.editSale)

route.delete('/:id', salesCtrl.deleteSale)

module.exports = route
