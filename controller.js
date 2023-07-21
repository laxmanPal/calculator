const Calculation = require("./model");

exports.addition = async (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const result = num1 + num2;

    // Save the calculation in the database
    const calculation = new Calculation({
      operation: `${num1} + ${num2}`,
      result,
    });
    await calculation.save();

    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong." });
  }
};

exports.subtract = async (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const result = num1 - num2;

    // Save the calculation in the database
    const calculation = new Calculation({
      operation: `${num1} - ${num2}`,
      result,
    });
    await calculation.save();

    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong." });
  }
};

exports.multiply = async (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const result = num1 * num2;

    // Save the calculation in the database
    const calculation = new Calculation({
      operation: `${num1} * ${num2}`,
      result,
    });
    await calculation.save();

    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong." });
  }
};

exports.divide = async (req, res) => {
  try {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
      return res.status(400).json({ error: "Cannot divide by zero." });
    }
    const result = num1 / num2;

    // Save the calculation in the database
    const calculation = new Calculation({
      operation: `${num1} / ${num2}`,
      result,
    });
    await calculation.save();

    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong." });
  }
};

exports.exponent = async (req, res) => {
  try {
    const { base, exponent } = req.body;
    const result = Math.pow(base, exponent);

    // Save the calculation in the database
    const calculation = new Calculation({
      operation: `${base} ^ ${exponent}`,
      result,
    });
    await calculation.save();

    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong." });
  }
};

exports.getHistroy = async (req, res) => {
  try {
    const calculations = await Calculation.find();
    res.json(calculations);
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong." });
  }
};
