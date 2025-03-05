const express = require("express");
const Record = require("../models/Record");
const router = express.Router();

router.get("/data", async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;

    const options = {
      page: parseInt(page),
      pageSize: parseInt(pageSize),
    };

    const result = await Record.paginate({}, options);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Database Error:", error);
    res.status(500).json({ error: "Error fetching records" });
  }
});

router.get("/data/:id", async (req, res) => {
  try {
    const record = await Record.findOne({ _id: req.params.id });
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json(record);
  } catch (error) {
    logger.error("Database Error:", error);
    res.status(500).json({ error: "Error fetching record" });
  }
});

module.exports = router;
