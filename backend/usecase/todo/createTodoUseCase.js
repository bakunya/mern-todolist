const createOne = require('../../dataaccess/mongodb/todo/createOne')

const createTodoUseCase = async (todoEntity) => {
    try {
        const result = createOne({
            todo: todoEntity.todo,
            userId: todoEntity.userId,
            completed: todoEntity.completed,
        })

        return Promise.resolve(result)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = createTodoUseCase