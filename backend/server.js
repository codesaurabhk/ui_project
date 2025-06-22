const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const warehouseRoutes = require("./routes/warehouseRoutes");
const stockInRoutes = require("./routes/StockInRoutes");
const StockOutRoutes = require("./routes/StockOutRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/warehouses", warehouseRoutes);
app.use("/api/stockin", stockInRoutes);
app.use("/api/stockOut", StockOutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));