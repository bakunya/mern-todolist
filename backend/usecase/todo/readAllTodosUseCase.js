const readAllByUserId = require("../../dataaccess/mongodb/todo/readAllByUserId")

const readAllTodosUseCase = async (userId) => {
    try {
        const todos = await readAllByUserId(userId)
        return Promise.resolve(todos)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = readAllTodosUseCase