const TodoModel = require('../../../database/mongodb/schemas/TodoSchema')

const updateOneByUserIdAndTodoId = async (updateData, credentials) => {
    try {
        // running model validate before update
        await TodoModel.validate(updateData, Object.keys(updateData))

        // running update
        const result = await TodoModel.updateOne({
            _id: credentials.todoId,
            userId: credentials?.userId,
        }, updateData).exec()

        return Promise.resolve(result)

    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = updateOneByUserIdAndTodoId