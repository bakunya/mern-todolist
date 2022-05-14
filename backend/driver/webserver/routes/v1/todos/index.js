const Router = require('express').Router()

const todosRoutes = require('./routes')
const isHaveTokenAuth = require('../../../middlewares/isHaveTokenAuth')
const isAuthenticated = require('../../../middlewares/isAuthenticated')

Router.use('/todos', isHaveTokenAuth, isAuthenticated, todosRoutes)

module.exports = Router