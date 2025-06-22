const express = require("express");
const { getStockOut, createStockOut, updateStockOut, deleteStockOut } = require("../controllers/StockOutControllers");


const router = express.Router();

router.get("/", getStockOut);
router.post("/", createStockOut);
router.put("/:id", updateStockOut);
router.delete("/:id", deleteStockOut);

module.exports = router;