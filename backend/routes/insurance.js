const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { healthData } = req.body;
  const response = await fetch("https://api.insurance-provider.com/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(healthData),
  });

  const data = await response.json();
  res.json(data);
});

module.exports = router;
