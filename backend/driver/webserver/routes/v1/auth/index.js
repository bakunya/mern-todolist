const Router = require('express').Router()
const authRoutes = require('./routes')

Router.use('/auth', authRoutes)

module.exports = Router