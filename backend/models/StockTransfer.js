const mongoose = require("mongoose");

const StockTransferSchema = new mongoose.Schema({
    quantity: {
        type: String,
        required: true,
    },
    warehouse: {
        type: String,
        required: true,
    },
    towarehouse: {
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

module.exports = mongoose.model("StockTransfer", StockTransferSchema);