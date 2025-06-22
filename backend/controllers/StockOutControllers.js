const StockOut = require("../models/StockOut");

// created stockout
const createStockOut = async (req, res) => {
    try {
        const newStcokOut = new StockOut(req.body);
        await newStcokOut.save();
        res.status(201).json(newStcokOut);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// get stockOut
const getStockOut = async (req, res) => {
    try {
        const stocks = await StockOut.find();
        res.status(200).json(stocks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//update  stockout
const updateStockOut = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedstock = await StockOut.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updatedstock);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//Delete stockout
const deleteStockOut = async (req, res) => {
    try {
        await StockOut.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "StockIn deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createStockOut, updateStockOut, deleteStockOut, getStockOut, };

