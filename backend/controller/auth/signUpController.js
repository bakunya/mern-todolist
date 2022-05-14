const UserEntity = require("../../entities/UserEntity")
const signUpUseCase = require("../../usecase/auth/signUpUseCase")

const signUpController = async (req, res, next) => {
    const user = new UserEntity()
    user.username = req.body.username
    user.password = req.body.password

    try {
        const credentials = await signUpUseCase(user)
        return res.status(201).json(credentials)
    } catch(er) {
        return next(er)
    }
}

module.exports = signUpController