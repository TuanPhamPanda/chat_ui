/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from '@/objects'
import { RootState } from '../stores'
import { apiVersion1 } from '@/apis'

export interface MessageReducerState {
    messages: Message[]
    loading: boolean
    error: string | null
}

const initialState: MessageReducerState = {
    messages: [],
    loading: false,
    error: ''
}

const messageApi = apiVersion1.messageApi

const createMessageThunk = createAsyncThunk(
    'message/createMessage',
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
    }) => {
        const response = await messageApi.createMessage(idUser, idRoom, contentMessage, file)
        return response.data
    }
)

const getAllMessageThunk = createAsyncThunk(
    'message/getAllMessageByIdUser',
    async ({ idUser, idRoom }: { idUser: string; idRoom: string }) => {
        const response = await messageApi.getMessageByIdRoomAndIdUser(idRoom, idUser)
        return response.data
    }
)

const deleteMessageThunk = createAsyncThunk(
    'message/deleteMessage',
    async ({ idMessage, idRoom, idUser }: { idMessage: string; idRoom: string; idUser: string }) => {
        const response = await messageApi.deleteMessage(idMessage, idRoom, idUser)
        return response.data
    }
)

const updateMessageThunk = createAsyncThunk(
    'message/updateMessage',
    async ({
        idMessage,
        idRoom,
        idUser,
        contentMessage,
        file
    }: {
        idMessage: string
        idRoom: string
        idUser: string
        contentMessage?: string
        file: { file: File; idFile: string }
    }) => {
        const response = await messageApi.updateMessage(idMessage, idRoom, idUser, contentMessage, file)
        return response.data
    }
)

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
    extraReducers(builder) {
        //create
        builder
            .addCase(createMessageThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(
                createMessageThunk.fulfilled,
                (state, action: PayloadAction<{ id: string; contentMessage: string; updatedAt: string }>) => {
                    state.error = null
                    state.loading = false
                    const messages = [...state.messages]
                    const message = action.payload
                    messages.push(new Message(message.id, message.contentMessage, message.updatedAt))
                    state.messages = messages
                }
            )
            .addCase(createMessageThunk.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = false
                state.messages = []
            })

            //get all
        builder
            .addCase(getAllMessageThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllMessageThunk.fulfilled, (state, action: PayloadAction<{ messages: Message[] }>) => {
                state.loading = false
                state.error = null
                state.messages = action.payload.messages
            })
            .addCase(getAllMessageThunk.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = false
                state.messages = []
            })

            //update
            builder
            .addCase(updateMessageThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(updateMessageThunk.fulfilled, (state, action: PayloadAction<{ messages: Message[] }>) => {
                state.loading = false
                state.error = null
                state.messages = action.payload.messages
            })
            .addCase(updateMessageThunk.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = false
                state.messages = []
            })

            //delete
            builder
            .addCase(deleteMessageThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteMessageThunk.fulfilled, (state, action: PayloadAction<{ messages: Message[] }>) => {
                state.loading = false
                state.error = null
                state.messages = action.payload.messages
            })
            .addCase(deleteMessageThunk.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = false
                state.messages = []
            })
    }
})

export const { addNewMessage, updateMessage, deleteMessage, clearAllMessages } = messageSlice.actions

export const selectMessageList = (state: RootState) => state.message

export default messageSlice.reducer
