const mongoose = require('mongoose')
const { mongoURI } = require('../../config')

mongoose.connect(mongoURI, { maxPoolSize: 3 })
    .then(() => console.log('mongodb is connected'))
    .catch(er => console.log(`mongodb connection error: ${er.message}`))

module.exports = mongoose