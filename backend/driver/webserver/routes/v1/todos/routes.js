const Router = require('express').Router()

const todosCreateController = require('../../../../../controller/todo/createTodoController')
const todosReadAllController = require('../../../../../controller/todo/readTodosController')
const todosReadOneController = require('../../../../../controller/todo/readOneTodosController')
const todosUpdateOneController = require('../../../../../controller/todo/updateOneTodosController')
const todosDeleteOneController = require('../../../../../controller/todo/deleteOneTodosController')

// post
Router.post('/', todosCreateController)

// get
Router.get('/', todosReadAllController)
Router.get('/:id', todosReadOneController)

// put
Router.put('/:id', todosUpdateOneController)

// delete
Router.delete('/:id', todosDeleteOneController)

module.exports = Router