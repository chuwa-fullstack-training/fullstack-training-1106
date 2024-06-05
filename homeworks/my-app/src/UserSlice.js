import {createSlice } from '@reduxjs/toolkit';
import { fetchUserByIdThunk, fetchUserThunk } from './UserThunk';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: {}
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
            state.users = action.payload;
        });

        builder.addCase(fetchUserByIdThunk.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});

export default userSlice.reducer;
