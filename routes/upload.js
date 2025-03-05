const express = require("express");
const multer = require("multer");

const router = express.Router();
const formidable = require("formidable");

router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm();
  form.multiples = true; // Enable multiple file uploads
  form.uploadDir = "../uploads"; // Set upload directory
  form.keepExtensions = true; // Keep file extensions

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Formidable Error:", err);
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end(err);
      return;
    }

    // Ensure files are uploaded
    if (!files.file) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("No file uploaded");
      return;
    }

    // Handle the uploaded file
    const uploadedFile = files.file;
    const newPath = `./uploads/${uploadedFile.newFilename}`;

    fs.rename(uploadedFile.filepath, newPath, (renameErr) => {
      if (renameErr) {
        console.error("File Rename Error:", renameErr);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File saving error");
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ fields, file: uploadedFile }));
    });
  });
});

module.exports = router;
