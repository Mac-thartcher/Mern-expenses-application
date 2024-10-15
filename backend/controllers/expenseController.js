const Expense = require('../models/Expense');

// Get all expenses 
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add  new expense
exports.addExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  try {
    const newExpense = new Expense({
      userId: req.user.id,
      title,
      amount,
      category,
      date
    });
    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  try {
    let expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }
    // Ensure user owns expense
    if (expense.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: { title, amount, category, date } },
      { new: true }
    );
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    let expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }
    // Ensure user owns expense
    if (expense.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Expense.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Expense removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
