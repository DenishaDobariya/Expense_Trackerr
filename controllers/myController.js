const Transaction = require('../models/transactionModel');

const listTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.render('index', { transactions });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const showAddTransactionForm = (req, res) => {
  res.render('add', { transaction: {} });
};

const showEditTransactionForm = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.render('add', { transaction });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const saveTransaction = async (req, res) => {
  const { type, category, amount, description, date } = req.body;

  try {
    if (req.params.id) {
      await Transaction.findByIdAndUpdate(req.params.id, { type, category, amount, description, date });
    } else {
      await Transaction.create({ type, category, amount, description, date });
    }
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  listTransactions,
  showAddTransactionForm,
  showEditTransactionForm,
  saveTransaction,
  deleteTransaction
};
