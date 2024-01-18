import { configureStore } from '@reduxjs/toolkit'
import { messageReducer, roomReducer, toggleReducer, userReducer } from '../reducers'

const store = configureStore({
    reducer: {
        message: messageReducer,
        room: roomReducer,
        user: userReducer,
        toggle: toggleReducer
    },
    middleware: (getDefaultMiddleware) => {
        const customizedMiddleware = getDefaultMiddleware({
            serializableCheck: false
        })
        return customizedMiddleware
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
