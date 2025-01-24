import { configureStore } from '@reduxjs/toolkit';
import userReducers from '../features/username/UserSlice';
export const UserStore = configureStore({
    reducer: userReducers
})