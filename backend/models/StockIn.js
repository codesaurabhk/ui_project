const mongoose = require("mongoose");

const StockINSchema = new mongoose.Schema({
    quantity: {
        type: String,
        required: true,
    },
    warehouse: {
        type: String,
        required: true,
    },
    Supplier: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    remarks: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("StockIn", StockINSchema);