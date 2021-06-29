const { Schema, model } = require('mongoose')

const menuSchema = new Schema({
  nameFood: { type: String, require: true },
  foodPrice: { type: Number, require: true }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('Menu', menuSchema)
