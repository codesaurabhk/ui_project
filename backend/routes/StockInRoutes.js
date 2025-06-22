const express = require("express");
const { getStockIn, createStockIn, updateStockIn, deleteStockIn } = require("../controllers/StockInControllers");


const router = express.Router();

router.get("/",getStockIn);
router.post("/",createStockIn);
router.put("/:id",updateStockIn);
router.delete("/:id",deleteStockIn);

module.exports = router;