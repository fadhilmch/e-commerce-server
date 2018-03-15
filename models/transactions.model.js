const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Transaction', new Schema({
  user: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  itemsPurchased: [{
    item:{
      type:Schema.Types.ObjectId,
      ref:'Item'
    },
    quantity:Number,
    subtotal:Number
  }],
  total: Number
},{
  timestamps: true;
}));
