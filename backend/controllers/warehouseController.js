const Warehouse = require("../models/Warehouse");

exports.getAllWarehouses = async (req, res) => {
    const warehouses = await Warehouse.find();
    res.json(warehouses);
};

exports.createWarehouse = async (req, res) => {
  try {
    const newWarehouse = new Warehouse(req.body);
    await newWarehouse.save();
    res.status(201).json({
      message: "Data created successfully",
      data: newWarehouse,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error creating warehouse",
      error: err.message,
    });
  }
};

exports.updateWarehouse = async (req, res) => {
    const updated = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.deleteWarehouse = async (req, res) => {
    await Warehouse.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};