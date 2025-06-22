const mongoose = require("mongoose");

const StockOutSchema = new mongoose.Schema({
    quantity: {
        type: String,
        required: true,
    },
    warehouse: {
        type: String,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    purpose: {
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
    remarks:{
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("StockOut", StockOutSchema);