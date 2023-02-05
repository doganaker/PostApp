import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setData: (state, action) => {
            return action.payload
        }
    }
})

export const { setData } = commentsSlice.actions

export default commentsSlice.reducer