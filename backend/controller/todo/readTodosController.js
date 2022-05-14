const readAllTodosUseCase = require('../../usecase/todo/readAllTodosUseCase')

const readTodosController = async (req, res, next) => {
    try {
        const todos = await readAllTodosUseCase(res.locals.decodedToken._id)
        return res.status(200).json(todos)
    } catch(er) {
        return next(er)
    }
}

module.exports = readTodosController