
const transactionModel = require('../models/transactionModel');

const defaultCon = async (req, res) => {
    try {
        const transactions = await transactionModel.find({});
        console.log("transactions", transactions);
        res.render('index', { transactions });
    } catch (err) {
        console.error("Error fetching transactions:", err);
        res.status(500).send("Server Error");
    }
};


const addCon = async (req, res) => {
    try {
        console.log("Transaction added..");
        console.log("body", req.body);
        const { type, category, amount, description, date } = req.body;
        const transaction = new transactionModel({
            type,
            category,
            amount,
            description,
            date
        });
        await transaction.save();
        console.log("Added transaction", transaction);
        res.redirect('/');
    } catch (err) {
        console.error("Error adding transaction:", err);
        res.status(500).send("Server Error");
    }
};

const updateCon = async (req, res) => {
    try {
        console.log("id", req.params);
        const { id } = req.params;
        const transaction = await transactionModel.findById(id);
        if (!transaction) {
            return res.status(404).send("Transaction not found");
        }
        console.log("transaction", transaction);
        res.render('edit', { transaction });
    } catch (err) {
        console.error("Error fetching transaction:", err);
        res.status(500).send("Server Error");
    }
};

const editCon = async (req, res) => {
    try {
        console.log("EDIT..");
        const updatedTransaction = await transactionModel.findByIdAndUpdate(req.body.id, req.body, { new: true });
        if (!updatedTransaction) {
            return res.status(404).send("Transaction not found");
        }
        console.log("Updated transaction", updatedTransaction);
        res.redirect('/');
    } catch (err) {
        console.error("Error updating transaction:", err);
        res.status(500).send("Server Error");
    }
};

const deleteCon = async (req, res) => {
    try {
        console.log("Delete..");
        const { id } = req.params;
        const deletedTransaction = await transactionModel.findByIdAndDelete(id);
        if (!deletedTransaction) {
            return res.status(404).send("Transaction not found");
        }
        console.log("Deleted transaction", deletedTransaction);
        res.redirect('/');
    } catch (err) {
        console.error("Error deleting transaction:", err);
        res.status(500).send("Server Error");
    }
};


module.exports={defaultCon, addCon, updateCon, editCon, deleteCon}