import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: null,
        loading: false,
        error: false,
    },

    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.error = true;
            state.loading = false;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions;
export default authSlice.reducer;