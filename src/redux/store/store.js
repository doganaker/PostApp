import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    }
})