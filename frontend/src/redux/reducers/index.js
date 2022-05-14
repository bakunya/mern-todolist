import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './auth'
import todosReducer from './todos'

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer,
})

export default rootReducer