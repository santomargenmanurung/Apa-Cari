const bcrypt = require("bcryptjs")


const hashingPassword = (plaintext) => {
    return bcrypt.hashSync(plaintext, 10)
}

const comparePassword = (password, hasshedPass) => {
    return bcrypt.compareSync(password, hasshedPass)
}

module.exports = {
    hashingPassword,
    comparePassword
}