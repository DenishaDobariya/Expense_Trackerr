const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/myController');

router.get('/', transactionController.listTransactions);
router.get('/add', transactionController.showAddTransactionForm);
router.get('/edit/:id', transactionController.showEditTransactionForm);
router.post('/:id?', transactionController.saveTransaction);
router.post('/delete/:id', transactionController.deleteTransaction);

module.exports = router;
