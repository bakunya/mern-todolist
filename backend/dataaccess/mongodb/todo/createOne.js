const TodoModel = require('../../../database/mongodb/schemas/TodoSchema')

const createOne = async (data) => {
    const todo = new TodoModel()
    
    todo.todo = data.todo
    todo.userId = data.userId
    todo.completed = data.completed

    try {
        const res = await todo.save()
        return Promise.resolve(res)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = createOne