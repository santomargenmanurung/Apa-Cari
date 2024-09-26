const express = require("express");
const router = express.Router();
const country = require("./country")

router.use("/countries", country)


module.exports = router