import { User } from '@/objects'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../stores'
import { apiVersion1 } from '@/apis'

export interface UserReducerState {
    user: User | null
    users: User[]
    loading: boolean
    error: string | null
}

const userLocalStorageString = localStorage.getItem('user')

const userLocalStorage = userLocalStorageString ? JSON.parse(userLocalStorageString) : null

const userApi = apiVersion1.userApi

export const getAllUsersThunk = createAsyncThunk('user', async () => {
    const response = await userApi.getAllUsers()
    return response
})

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
    users: [],
    loading: false,
    error: ''
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
    },
    extraReducers(builder) {
        builder
            .addCase(getAllUsersThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllUsersThunk.fulfilled, (state, action: PayloadAction<{ users: User[] }>) => {
                state.loading = false
                state.error = null
                const users = [...action.payload.users]
                state.users = users
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(getAllUsersThunk.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = false
                state.users = []
            })
    }
})

export const { login, logout, clearAllUsers, getAllUsers } = userSlice.actions

export const selectUser = (state: RootState) => {
    state.user
}

export default userSlice.reducer
