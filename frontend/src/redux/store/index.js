import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
 
import rootReducer from '../reducers'
 
const persistConfig = {
    storage,
    version: 1,
    key: 'root',
    whitelist: ['auth'],
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

const persistor = persistStore(store)
 
export { persistor, PersistGate }
export default store