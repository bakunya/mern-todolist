const TodoModel = require('../../../database/mongodb/schemas/TodoSchema')

const readAllByUserId = async (userId) => {
    try {
        const todos = await TodoModel.find({ userId }).exec()
        return Promise.resolve(todos)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = readAllByUserId