const express = require("express");
const fs = require("fs");
const csvParser = require("csv-parser");
const Record = require("../models/Record");
const path = require("path");
const logger = require("../config/logger");

const router = express.Router();

router.post("/process", async (req, res) => {
  const fileName = req.body.fileName;

  if (!fileName) return res.status(400).send("File Name is required");

  const filePath = path.join(__dirname, "../uploads", fileName);

  let results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", async () => {
      try {
        await Record.insertMany(results);
        res.send("File Data Successfully Imported");
      } catch (error) {
        logger.error("Database Error:", error);
        res.status(500).send("Database error: " + error);
      }
    })
    .on("error", (err) => {
      res.status(500).send("Error reading csv file:" + err.message);
    });
});

module.exports = router;
