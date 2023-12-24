import { Room } from '@/objects'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../stores'

interface RoomReducerState {
    rooms: Room[]
}

const initialState: RoomReducerState = {
    rooms: []
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        //ADD_USER
        addUser: (state, action: PayloadAction<{ userId: string; roomName: string }>) => {
            const newState = [...state.rooms]
            const room = newState.find((r) => r.$roomName === action.payload.roomName)

            if (room) {
                if (room.$users.includes(action.payload.userId)) {
                    room.$users.push(action.payload.userId)
                    const rooms = newState.map((r) => (r.$roomName === action.payload.roomName ? { ...room } : r))
                    state.rooms = rooms
                }
            }
        }
        /*
        //ADĐ_ROOM
        addRoom: (state, action: PayloadAction<{ roomName: string, userId: string }>) => {
            // const newState = [...state.rooms]
            // const room = newState.find((r) => r.$roomName === action.payload.roomName)
            // if(!room){

            // }

        },
        //DELETE_ROOM
        deleteRoom: (state, action: PayloadAction<{ roomId: string }>) => {},
        //DELETE_USER_IN_ROOM
        deleteUserInRoom: (state, action: PayloadAction<{ userId: string; roomId: string }>) => {},
        //GET_ROOM_BY_ID_ROOM
        getRoomById: (state, action: PayloadAction<{ roomId: string }>) => {},
        //UPDATE_BACKGROUND_ROOM
        updateBackgroundRoom: (state, action: PayloadAction<{ roomId: string; background: string }>) => {},
        //UPDATE_NAME_ROOM
        updateNameRoom: (state, action: PayloadAction<{ roomId: string; nameRoom: string }>) => {}
        */
    }
    // extraReducers: {

    // }
})

export const {
    addUser
    //    addRoom, deleteRoom, deleteUserInRoom, getRoomById, updateBackgroundRoom, updateNameRoom
} = roomSlice.actions

export const selectRoomList = (state: RootState) => state.room

export default roomSlice.reducer
