import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../stores'

interface InformationProfileState {
    idRoom: string
    isGroup: boolean
}

export interface ToggleReducerState {
    theme: 'light' | 'dark'
    sticker: boolean
    informationProfile: InformationProfileState | null
}

//toggle
//+ profile
//+ sidebar right
//+ list user
//micro

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

const initialState: ToggleReducerState = {
    theme: themeData ? 'dark' : 'light',
    sticker: false,
    informationProfile: null
}

// toggleSlice
/*
    theme
*/
const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setTheme: (state) => {
            if (state.theme === 'light') {
                state.theme = 'dark'
            } else {
                state.theme = 'light'
            }
        },
        toggleSticker: (state) => {
            state.sticker = !state.sticker
        },
        toggleProfile: (state, action: PayloadAction<InformationProfileState | null>) => {
            state.informationProfile = action.payload
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

export const { setTheme, toggleSticker, toggleProfile } = toggleSlice.actions

export const selectToggle = (state: RootState) => state.toggle

export default toggleSlice.reducer
