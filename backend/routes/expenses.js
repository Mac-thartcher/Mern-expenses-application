// const { registerUser } = require('../controllers/expenseController');
const { getExpenses, addExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');
const router = require('express').Router();




router.get('/get-expense', getExpenses);
router.post('/add-expense',  addExpense);
router.put('/update-expense/:id',  updateExpense);
router.delete('/delete-expense:id',  deleteExpense);


module.exports = router