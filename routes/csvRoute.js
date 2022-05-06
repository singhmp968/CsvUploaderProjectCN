const express = require("express");
const router = express.Router();
const csvController = require("../controller/csvController");
router.post("/csvupload", csvController.csvupload);
module.exports = router;
