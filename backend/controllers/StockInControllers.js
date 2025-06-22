const StockIn = require("../models/StockIn");

// created stockin
const createStockIn = async (req, res) => {
    try {
        const newStcokIn = new StockIn(req.body);
        await newStcokIn.save();
        res.status(201).json(newStcokIn);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

};

// get stockin
const getStockIn = async (req, res) => {
    try {
        const stocks = await StockIn.find();
        res.status(200).json(stocks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//update  stockin
const updateStockIn = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedstock = await StockIn.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updatedstock);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//Delete stockin
const deleteStockIn = async (req, res) => {
    try {
        await StockIn.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "StockIn deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {createStockIn,updateStockIn,deleteStockIn,getStockIn,};

