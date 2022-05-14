const Router = require('express').Router()
const authRoutes = require('./auth')
const todosRoutes = require('./todos')

Router.use('/v1', [authRoutes, todosRoutes])

module.exports = Router