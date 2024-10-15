const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title: { type: String, trim:true, maxLength:50, required: true },
  amount: { type: Number, required: true, maxLength:20, trim: true },
  category: { type: String, required: true, trim: true },
  date: { type: Date, required: true, trim: true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
module.exports = mongoose.model('Expense', ExpenseSchema);
