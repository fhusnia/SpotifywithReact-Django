import { configureStore } from '@reduxjs/toolkit'
import { customerSlice } from './slices/authSlice'

export const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch