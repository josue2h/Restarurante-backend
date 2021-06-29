const saleCtrl = {}

const Sale = require('../models/SalesModel')

saleCtrl.getSales = async (req, res) => {
  const sales = await Sale.find()
  res.json(sales)
}
saleCtrl.createSale = async (req, res) => {
  const newSale = new Sale(req.body)
  await newSale.save()
  res.send({ message: 'venta realizada' })
}

saleCtrl.getSale = async (req, res) => {
  const sale = await Sale.findById(req.params.id)
  res.send(sale)
}

saleCtrl.editSale = async (req, res) => {
  await Sale.findByIdAndUpdate(req.params.id, req.body)
  res.json({ status: 'venta actualizada' })
}

saleCtrl.deleteSale = async (req, res) => {
  await Sale.findByIdAndDelete(req.params.id)
  res.json({ status: 'venta eliminada' })
}

module.exports = saleCtrl
