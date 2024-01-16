import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../stores'

export interface ThemeReducerState {
    theme: 'light' | 'dark'
}

const themeSystem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const themeData = localStorage.getItem('theme') === null ? themeSystem : localStorage.getItem('theme') === 'true'

if (themeData) {
    const allElement = document.querySelector('*')
    if (allElement) {
        if (allElement.classList.contains('light')) {
            allElement.classList.remove('light')
        }
        allElement.classList.add('dark')
    }
} else {
    const allElement = document.querySelector('*')
    if (allElement) {
        if (allElement.classList.contains('dark')) {
            allElement.classList.remove('dark')
        }
        allElement.classList.add('light')
    }
}

const initialState: ThemeReducerState = {
    theme: themeData ? 'dark' : 'light'
}

// toggleSlice
/*
    theme
    
*/
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state) => {            
            if (state.theme === 'light') {
                state.theme = 'dark'
            } else {
                state.theme = 'light'
            }
        }
        // setThemeDark: (state) => {
        //     state.theme = 'dark'
        //     localStorage.setItem('theme', JSON.stringify(true))
        //     const allElement = document.querySelector('*')
        //     if (allElement) {
        //         if (allElement.classList.contains('light')) {
        //             allElement.classList.remove('light')
        //         }
        //         allElement.classList.add('dark')
        //     }
        // }
    }
})

export const { setTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer
