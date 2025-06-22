const StockTransfer = require("../models/StockTransfer");

// created stockTransfer
const createStockTransfer = async (req, res) => {
    try {
        const newStcokTransfer = new StockTransfer(req.body);
        await newStcokTransfer.save();
        res.status(201).json(newStcokTransfer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// get stockTransfer
const getStockTransfer = async (req, res) => {
    try {
        const stocks = await StockTransfer.find();
        res.status(200).json(stocks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//update  stockTransfer
const updateStockTransfer = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedstock = await StockTransfer.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updatedstock);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//Delete stockTransfer
const deleteStockTransfer = async (req, res) => {
    try {
        await StockTransfer.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "StockIn deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createStockTransfer, updateStockTransfer, deleteStockTransfer, getStockTransfer, };

