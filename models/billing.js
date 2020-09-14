// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var BillingSchema   = new mongoose.Schema({
  ItemName: String,
  ItemNo: String,
  quantity: Number,
  Price: String,
  Total:Number
});

// Export the Mongoose model
module.exports = mongoose.model('Billing', BillingSchema);