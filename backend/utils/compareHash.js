const bcrypt = require('bcrypt')

const compareHash = async (hashedPassword, plainPassword) => {
    try {
        const result = await bcrypt.compare(plainPassword, hashedPassword)
        return Promise.resolve(result)
    } catch(er) {
        console.log(er)
        return Promise.reject(er)
    }
}

module.exports = compareHash