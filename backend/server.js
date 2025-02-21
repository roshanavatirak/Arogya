const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const predictRoutes = require("./routes/predict");
const doctorRoutes = require("./routes/doctors");
const insuranceRoutes = require("./routes/insurance");

app.use("/api/predict", predictRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/insurance", insuranceRoutes);

app.listen(8000, () => console.log("Backend running on port 8000"));
