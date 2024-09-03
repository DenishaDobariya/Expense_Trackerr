const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now 
    }
});

const transactionModel = mongoose.model("transactions", transactionSchema); 
module.exports = transactionModel;
