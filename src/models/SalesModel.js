const { Schema, model } = require('mongoose')

const saleSchema = new Schema({
  nameClient: { type: String, require: true },
  salePrice: { type: Number, require: true },
  description: { type: String, require: true }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('Sale', saleSchema)
