import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    errorGetAll: false,
    errorCreate: false,
    loadingGetAll: false,
    loadingCreate: false,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setState(state, action) {
            try { state[action.payload.type] = action.payload.value }
            catch(e) { console.log(e.message) }
        }
    }
})

export const types = {
    todos: 'todos',
    errorGetAll: 'errorGetAll',
    errorCreate: 'errorCreate',
    loadingGetAll: 'loadingGetAll',
    loadingCreate: 'loadingCreate',
}
export const { setState } = todosSlice.actions
export default todosSlice.reducer