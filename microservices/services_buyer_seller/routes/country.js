const express = require("express");
const route = express.Router();
const ControllerCountry = require("../controller/controllerCountry")

route.post("/", ControllerCountry.createNewCountry)
route.get("/", ControllerCountry.getAllCountry)
route.delete("/:countryId", ControllerCountry.deleteCountry)


module.exports = route