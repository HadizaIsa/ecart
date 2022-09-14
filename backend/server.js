const express = require("express");

const mongoose = require ("mongoose");

const app = express();
require("dotenv").config();
// const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.get ("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));