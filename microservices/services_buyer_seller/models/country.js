const mongoose = require("mongoose")
// const validator = require("validator")


const countrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        country_code: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
)

const Country = mongoose.model('country', countrySchema);

module.exports = Country;