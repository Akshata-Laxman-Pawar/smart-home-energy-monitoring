require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));


// Simple route
app.get("/", (req, res) => {
  res.send("Smart Home Energy Monitoring Backend Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
