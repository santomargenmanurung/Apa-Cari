const mongoose = require("mongoose")
const validator = require("validator");
const { hashingPassword } = require("../helpers/bcrypt");


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        profilePict: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is not valid');
                }
            },
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        countryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Country",
            required: true,
        },
    },
    { timestamps: true }
);
userSchema.pre("save", async (next) => {
    try {
        const user = this
        if (!user.isModified("password")) return next()
        user.password = hashingPassword(user.password)
        next()
    } catch (error) {
        next(error)
    }
})
const User = mongoose.model('User', userSchema);

module.exports = User;