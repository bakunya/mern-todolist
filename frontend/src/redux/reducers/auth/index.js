import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    token: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin(state, action) {
            state.token = action.payload.token
            state.username = action.payload.username
        },
        signout(state) {
            state.token = ''
            state.username = ''
        }
    }
})

export const { signin, signout } = authSlice.actions
export default authSlice.reducer