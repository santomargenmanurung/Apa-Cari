"use strict";
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const port = process.env.PORT || 5000
require("./config/configMong");
const routes = require("./routes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/", routes)

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`);
// });

module.exports = app;
