const readOneTodosUseCase = require('../../usecase/todo/readOneTodosUseCase')

const readOneTodosController = async (req, res, next) => {
    try {
        const todos = await readOneTodosUseCase({
            userId: res.locals.decodedToken._id,
            todoId: req.params.id
        })
        return res.status(200).json(todos)
    } catch(er) {
        return next(er)
    }
}

module.exports = readOneTodosController