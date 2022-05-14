const deleteOneTodosUseCase = require('../../usecase/todo/deleteOneTodosUseCase')

const deleteOneTodosController = async (req, res, next) => {
    try {
        const result = await deleteOneTodosUseCase({
            userId: res.locals.decodedToken._id,
            todoId: req.params.id
        })
        return res.status(201).json(result)
    } catch(er) {
        return next(er)
    }
}

module.exports = deleteOneTodosController