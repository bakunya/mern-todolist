const deleteOneByUserIdAndTodoId = require('../../dataaccess/mongodb/todo/deleteOneByUserIdAndTodoId')

const deleteOneTodosUseCase = async (credentials) => {
    try {
        const result = await deleteOneByUserIdAndTodoId(credentials)
        return Promise.resolve(result)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = deleteOneTodosUseCase