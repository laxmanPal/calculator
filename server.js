const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Dotenv Config
require("dotenv").config();

// Initializing Express
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Global Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

// Home Route
app.get("/", (req, res) => {
  res.send("Server Is Running");
});

// Endpoints
app.use("/api", require("./routes"));

// App Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
