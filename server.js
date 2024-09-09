const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
// const Razorpay = require("razorpay");

// Load environment variables
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/expenses", require("./routes/expenses"));
app.use("/api/payment", require("./routes/payment"));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, `frontend/src/${req.url}`));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
