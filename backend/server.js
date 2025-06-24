const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const warehouseRoutes = require("./routes/warehouseRoutes");
const stockInRoutes = require("./routes/StockInRoutes");
const StockOutRoutes = require("./routes/StockOutRoutes");
const StockTransferRoutes = require("./routes/StockTransferRoutes");
const addware = require("./routes/addware");
const cors = require("cors");

dotenv.config();
connectDB();

const corsOptions = {
    origin : "http://localhost:5173",
    methods: "GET , POST , PUT , DELETE ,PATCH, HEAD",
    Credential:true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/warehouses", warehouseRoutes);
app.use("/api/stockin", stockInRoutes);
app.use("/api/stockOut", StockOutRoutes);
app.use("/api/stocktransfer", StockTransferRoutes);
app.use("/api/addware",addware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));