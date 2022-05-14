const createOne = require('../../dataaccess/mongodb/user/createOne')
const hashing = require('../../utils/hashing')
const JWTSign = require('../../utils/JWTSign')

async function signUpUseCase(userEntity) {
    try {
        const hashedPassword = await hashing(userEntity.password)
        const savedResponse = await createOne({ username: userEntity.username, password: hashedPassword })
        const signToken = await JWTSign(userEntity.username, savedResponse._id)

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

module.exports = signUpUseCase