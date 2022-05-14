const TodoEntity = require('../../entities/TodoEntity')
const createTodoUseCase = require('../../usecase/todo/createTodoUseCase')

const createTodoController = async (req, res, next) => {
    const todo = new TodoEntity()
    todo.completed = false
    todo.todo = req.body.todo
    todo.userId = res.locals.decodedToken._id

    try {
        const result = await createTodoUseCase(todo)
        return res.status(201).send({ message: 'new todo added!', result })
    } catch(er) {
        return next(er)
    }
}

module.exports = createTodoController