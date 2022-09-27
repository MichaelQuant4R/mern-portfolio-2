import {createSlice} from "@reduxjs/toolkit";

const dataAdminSlice = createSlice({
    name: "adminData",
    initialState:{
        data: null,
        loading: false,
        error: false,
    },

    reducers: {
        dataStartAdmin: (state) => {
            state.loading = true;
        },
        dataSuccessAdmin: (state, action) => {
            state.loading = false;
            state.data = action.payload;
                
        },
        dataFailureAdmin: (state) => {
            state.error = true;
            state.loading = false;
        },

    }
});

export const {dataStartAdmin, dataSuccessAdmin, dataFailureAdmin} = dataAdminSlice.actions;
export default dataAdminSlice.reducer;