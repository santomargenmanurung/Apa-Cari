const Country = require("../models/country")

class ControllerCountry {
    static async createNewCountry(req, res, next) {
        try {
            const { name, country_code } = req.body
            const newCountry = await Country.create({ name, country_code })
            let response = {
                statusDesc: "success",
                statusCode: 201,
                data: {
                    country: {
                        _id: newCountry._id,
                        name: newCountry.name,
                        country_code: newCountry.country_code,
                    }
                }
            }
            res.status(201).json(response)
        } catch (error) {
            next(error)
        }
    }
    static async getAllCountry(req, res, next) {
        try {
            const allCountry = await Country.find().select("-_id -__v -createdAt -updatedAt")
            let response = {
                statusDesc: "success",
                statusCode: 200,
                data: { countries: allCountry }
            }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    static async deleteCountry(req, res, next) {
        try {
            const { countryId } = req.params
            await Country.deleteOne({ _id: countryId })
            let response = {
                statusDesc: "success",
                statusCode: 200,
                data: { message: "country has been deleted" }
            }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = ControllerCountry