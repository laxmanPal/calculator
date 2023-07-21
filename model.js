const mongoose = require("mongoose");

const calculationSchema = new mongoose.Schema({
  operation: String,
  result: Number,
});

const Calculation = mongoose.model("Calculation", calculationSchema);

module.exports = Calculation;
