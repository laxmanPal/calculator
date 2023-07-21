const express = require("express");
const controller = require("./controller");
const router = express.Router();

// Addition Endpoint
router.post("/add", controller.addition);

// Subtract Endpoint
router.post("/subtract", controller.subtract);

// Multiply Endpoint
router.post("/multiply", controller.multiply);

// Divide Endpoint
router.post("/divide", controller.divide);

// Exponent Endpoint
router.post("/exponent", controller.exponent);

// Get all previous calculations
router.get("/history", controller.getHistroy);

module.exports = router;
