import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from '@/objects'
import { RootState } from '../stores'
// import { apiVersion1 } from '@/apis'

interface MessageReducerState {
    messages: Message[]
}

const initialState: MessageReducerState = {
    messages: []
}

/*
const messageApi = apiVersion1.messageApi

const createMessage = createAsyncThunk(
    'message',
    async ({
        idUser,
        idRoom,
        contentMessage,
        file
    }: {
        idUser: string
        idRoom: string
        contentMessage?: string
        file?: File
    }): Promise<string> => {
        const response = await messageApi.createMessage(idUser, idRoom, contentMessage, file)
        return response.data
    }
)
*/

//message in room
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addNewMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload)
        },
        updateMessage: (state, action: PayloadAction<Message>) => {
            const {
                payload: { $id, $contentMessage, $updatedAt }
            } = action
            state.messages = state.messages.map((message) =>
                message.$id === $id ? { ...message, $contentMessage, $updatedAt } : message
            )
        },
        deleteMessage: (state, action: PayloadAction<{ id: string }>) => {
            state.messages = state.messages.filter((message) => message.$id !== action.payload.id)
        },
        getAllMessages: (state, action: PayloadAction<{ messages: Message[] }>) => {
            state.messages = action.payload.messages
        },
        getMessage: (state, action: PayloadAction<{ messageId: string }>) => {
            state.messages.find((message) => message.$id !== action.payload.messageId)
        },
        clearAllMessages: (state) => {
            state.messages = []
        }
    },
    // extraReducers(builder) {
    //     // builder.addCase()
    // }
})

export const { addNewMessage, updateMessage, deleteMessage, clearAllMessages } = messageSlice.actions

export const selectMessageList = (state: RootState) => state.message

export default messageSlice.reducer
