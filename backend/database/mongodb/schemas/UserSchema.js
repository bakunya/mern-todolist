const mongoose = require('../index')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        min: [5, 'Min length is 5'],
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)