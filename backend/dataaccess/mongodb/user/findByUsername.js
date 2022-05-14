const UserModel = require('../../../database/mongodb/schemas/UserSchema')

const findByUsername = async (username) => {
    try {

        const user = await UserModel.findOne({ username }, 'username password').exec()
        return Promise.resolve(user)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = findByUsername