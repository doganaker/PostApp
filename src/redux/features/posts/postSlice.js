import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setData: (state, action) => {
            return action.payload
        }
    }
})

export const { setData } = postSlice.actions

export default postSlice.reducer