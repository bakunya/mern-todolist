const UserModel = require('../../../database/mongodb/schemas/UserSchema')

const createOne = async (data) => {
    const user = new UserModel()
    user.username = data.username
    user.password = data.password

    try {
        const res = await user.save()
        return Promise.resolve(res)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = createOne