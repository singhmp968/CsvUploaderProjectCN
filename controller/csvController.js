const CsvSchema = require("../models/csvSchema");
// const upload = multer({ dest: "uploads/" });
module.exports.csvupload = async function (req, res) {
  console.log("dasdas", req.body);
  CsvSchema.uploadCSV(req, res, function (err) {
    if (err) {
      console.log("multer error", err);
      return;
    }
    console.log(req.file);
    if (req.file) {
    }
  });
  if (req.file) {
    console.log("dasdas");
  }
  return res.send("single file uploaded successfully");
};
