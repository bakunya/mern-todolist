const Router = require('express').Router()

const signUpController = require('../../../../../controller/auth/signUpController')
const signInController = require('../../../../../controller/auth/signInController')

Router.post('/signup', signUpController)
Router.post('/signin', signInController)

module.exports = Router