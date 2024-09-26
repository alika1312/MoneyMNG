const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        
        amount: {
            type: Number,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
            default: 'ILS'
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Income', incomeSchema);