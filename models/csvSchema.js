const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const CSV_PATH = path.join("/uploads/CSVFILES");
const csvSchema = new mongoose.Schema(
  {
    csvFileLoc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", CSV_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix); //file.fieldname  is csvFileLocation
  },
});

csvSchema.statics.uploadCSV = multer({ storage: storage }).single("csvFileLoc");
csvSchema.statics.csvPath = CSV_PATH;
const CsvSchema = mongoose.model("csvSchema", csvSchema);
module.exports = CsvSchema;
