const findByUsername = require("../../dataaccess/mongodb/user/findByUsername")
const compareHash = require('../../utils/compareHash')
const JWTSign = require('../../utils/JWTSign')

const signInUseCase = async (userEntity) => {
    try {
        const userFromDatabase = await findByUsername(userEntity.username)
        // handle user not found
        if(!userFromDatabase) throw new Error('Invalid credentials.')

        const isCorrectPassword = await compareHash(userFromDatabase.password, userEntity.password)
        // handle wrong password
        if(!isCorrectPassword) throw new Error('Invalid credentials.')

        const signToken = await JWTSign(userEntity.username, userFromDatabase._id)
        return Promise.resolve({
            token: signToken,
            credentials: {
                username: userEntity.username
            },
        })
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = signInUseCase