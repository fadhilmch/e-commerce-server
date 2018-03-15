const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Item', new Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  stock: Number
},{
  timtestamps: true,
}));
