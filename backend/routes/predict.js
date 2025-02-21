const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { symptoms } = req.body;
  const response = await fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms }),
  });

  const data = await response.json();
  res.json(data);
});

module.exports = router;
