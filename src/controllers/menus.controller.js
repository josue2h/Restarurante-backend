const menuCtrl = {}

const Menu = require('../models/MenusModel')

menuCtrl.getMenus = async (req, res) => {
  const menus = await Menu.find()
  res.json(menus)
}

menuCtrl.createMenu = async (req, res) => {
  const newMenu = new Menu(req.body)
  await newMenu.save()
  res.send({ message: 'menu guardado' })
}

menuCtrl.getMenu = async (req, res) => {
  const menu = await Menu.findById(req.params.id)
  res.send(menu)
}

menuCtrl.editMenu = async (req, res) => {
  await Menu.findByIdAndUpdate(req.params.id, req.body)
  res.json({ status: 'menu actualizado' })
}

menuCtrl.deleteMenu = async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id)
  res.json({ status: 'menu eliminado' })
}

module.exports = menuCtrl
