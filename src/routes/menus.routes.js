const { Router } = require('express')
const route = Router()

const menusCtrl = require('../controllers/menus.controller')

route.get('/', menusCtrl.getMenus)

route.post('/', menusCtrl.createMenu)

route.get('/:id', menusCtrl.getMenu)

route.put('/:id', menusCtrl.editMenu)

route.delete('/:id', menusCtrl.deleteMenu)

module.exports = route
