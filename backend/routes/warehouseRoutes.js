const express = require("express");
const { getAllWarehouses, createWarehouse, updateWarehouse, deleteWarehouse } = require("../controllers/warehouseController");
//const {getAllWarehouse, createWarehouse, updatedWarehouse, deletedWarehouse, getAllWarehouses,} = require("../controllers/warehouseController");

const router = express.Router();

router.get("/",getAllWarehouses);
router.post("/",createWarehouse);
router.put("/:id",updateWarehouse);
router.delete("/:id",deleteWarehouse);

module.exports = router;