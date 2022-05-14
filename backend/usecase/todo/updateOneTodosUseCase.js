const updateOneByUserIdAndTodoId = require("../../dataaccess/mongodb/todo/updateOneByUserIdAndTodoId")

const updateOneTodosUseCase = async (updateData, credentials) => {
    try {
        const todos = await updateOneByUserIdAndTodoId(updateData, credentials)
        return Promise.resolve(todos)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = updateOneTodosUseCase