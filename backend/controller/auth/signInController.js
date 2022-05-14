const UserEntity = require("../../entities/UserEntity")
const signInUseCase = require("../../usecase/auth/signInUseCase")

const signInController = async (req, res, next) => {
    const user = new UserEntity()
    user.username = req.body.username
    user.password = req.body.password

    try {
        const credentials = await signInUseCase(user)
        return res.status(200).json(credentials)
    } catch(er) {
        return next(er)
    }
}

module.exports = signInController