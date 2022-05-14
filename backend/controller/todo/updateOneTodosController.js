const TodoEntity = require('../../entities/TodoEntity')
const updateOneTodosUseCase = require('../../usecase/todo/updateOneTodosUseCase')

const readOneTodosController = async (req, res, next) => {
    const todo = new TodoEntity()
    todo.todo = typeof req.body?.todo === 'string' ? req.body?.todo?.trim() : null
    todo.completed = req.body?.completed ?? null

    Object.keys(todo).forEach(itm => {
        if(todo[itm] === null || todo[itm] === undefined || todo[itm] === '') delete todo[itm]
    })

    try {
        if(!Object.keys(todo).length) {
            res.status(400)
            return next(Error('Invalid credentials'))
        }

        const result = await updateOneTodosUseCase(todo, {
            todoId: req.params.id,
            userId: res.locals.decodedToken._id
        })
        return res.status(201).json(result)
    } catch(er) {
        return next(er)
    }
}

module.exports = readOneTodosController