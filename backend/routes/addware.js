const express = require("express");
const {getware, createware} = require("../controllers/addwareControllers");

const router = express.Router();

router.get("/", getware);
router.post("/",createware);

module.exports = router;