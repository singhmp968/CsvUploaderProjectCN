const CsvSchema = require("../models/csvSchema");
// const upload = multer({ dest: "uploads/" });
const fs = require("fs");
module.exports.csvupload = async function (req, res) {
  console.log("dasdas", req.body);
  CsvSchema.uploadCSV(req, res, function (err) {
    if (err) {
      console.log("multer error", err);
      return;
    }
    console.log(req.file);
    if (req.file) {
      // checking if the file with same name exitt or not
      //updaing the path
      // creating the file
      CsvSchema.create(
        { csvFileName: req.file.filename },
        function (err, newcsv) {
          if (err) {
            console.log("error", err);
            return;
          }
          newcsv.csvFileLoc = CsvSchema.csvPath + "/" + req.file.filename;
          newcsv.save();
        }
      );
    }
  });

  return res.redirect("back");
};
