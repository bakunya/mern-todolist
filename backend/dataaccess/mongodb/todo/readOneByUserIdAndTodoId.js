const TodoModel = require('../../../database/mongodb/schemas/TodoSchema')

const readOneByUserIdAndTodoId = async (userId, todoId) => {
    try {
        const todo = await TodoModel.findOne({ userId, _id: todoId }).exec()
        return Promise.resolve(todo)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = readOneByUserIdAndTodoId