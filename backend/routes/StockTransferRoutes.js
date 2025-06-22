const express = require("express");
const { getStockTransfer, createStockTransfer, updateStockTransfer, deleteStockTransfer } = require("../controllers/StockTransferControllers");


const router = express.Router();

router.get("/", getStockTransfer);
router.post("/", createStockTransfer);
router.put("/:id", updateStockTransfer);
router.delete("/:id", deleteStockTransfer);

module.exports = router;