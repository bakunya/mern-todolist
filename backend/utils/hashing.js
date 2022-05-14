const bcrypt = require('bcrypt')

const hashing = async plainText => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedText = await bcrypt.hash(plainText, salt)
        return Promise.resolve(hashedText)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = hashing