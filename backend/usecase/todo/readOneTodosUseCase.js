const readOneByUserIdAndTodoId = require("../../dataaccess/mongodb/todo/readOneByUserIdAndTodoId")

const readAllTodosUseCase = async (credentials) => {
    try {
        const todos = await readOneByUserIdAndTodoId(credentials.userId, credentials.todoId)
        return Promise.resolve(todos)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = readAllTodosUseCase