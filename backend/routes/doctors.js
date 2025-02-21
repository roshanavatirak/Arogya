const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { location } = req.body;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&type=doctor&key=YOUR_API_KEY`
  );
  const data = await response.json();
  res.json(data);
});

module.exports = router;
