const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("./config/db.js");

const uploadRoutes = require("./routes/upload.js");
const processRoutes = require("./routes/process.js");
const dataRoutes = require("./routes/getData.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use(uploadRoutes);
app.use(processRoutes);
app.use(dataRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
