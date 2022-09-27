import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState:{
        currentTheme: null,
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

export const {loginStartAdmin, loginSuccessAdmin, loginFailureAdmin, logoutAdmin} = themeSlice.actions;
export default themeSlice.reducer;