import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState:{
        currentAdmin: null,
        loading: false,
        error: false,
    },

    reducers: {
        loginStartAdmin: (state) => {
            state.loading = true;
        },
        loginSuccessAdmin: (state, action) => {
            state.loading = false;
            state.currentAdmin = action.payload;
        },
        loginFailureAdmin: (state) => {
            state.error = true;
            state.loading = false;
        },
        logoutAdmin: (state) => {
            state.currentAdmin = null;
        }
    }
});

export const {loginStartAdmin, loginSuccessAdmin, loginFailureAdmin, logoutAdmin} = adminSlice.actions;
export default adminSlice.reducer;