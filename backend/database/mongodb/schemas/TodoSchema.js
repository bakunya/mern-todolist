const mongoose = require('../index')
const { Schema, Types: { ObjectId } } = mongoose

const TodoSchema = new Schema({
    todo: {
        type: String,
        required: true,
    },
    userId: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    completed: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('Todo', TodoSchema)