import { User } from '@/objects'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../stores'

export interface UserReducerState {
    user: User | null
    users: User[]
}

const userLocalStorageString = localStorage.getItem('user')

const userLocalStorage = JSON.parse(userLocalStorageString || '')

const initialState: UserReducerState = {
    user: userLocalStorage
        ? new User(
              userLocalStorage.id,
              userLocalStorage.name,
              userLocalStorage.picture,
              userLocalStorage.family_name,
              userLocalStorage.given_name
          )
        : null,
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: User }>) => {
            state.user = action.payload.user
            localStorage.setItem('user', JSON.stringify(action.payload.user))
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem('user')
        },
        getAllUsers: (state, action: PayloadAction<{ users: User[] }>) => {
            state.users = action.payload.users
        },
        clearAllUsers: (state) => {
            state.users = []
        }
    }
})

export const { login, logout, clearAllUsers, getAllUsers } = userSlice.actions

export const selectUser = (state: RootState) => {
    state.user
}

export default userSlice.reducer
