const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
    head:String,
    desc:String,
    stored:String,
    items:String,
    capacity:String,
    progress:String,
    stock : String,
    no : String,
});

module.exports = mongoose.model("Warehouse", warehouseSchema);