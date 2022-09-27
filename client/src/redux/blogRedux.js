import {createSlice} from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: "blog",
    initialState:{
        blogs: [],
        loading: false,
        error: false,
    },
    reducers: {
        // get all blogs
        getBlogsStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        getBlogsSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.blogs = action.payload;
        },
        getBlogsFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        // delete blog
        deleteBlogStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        deleteBlogSuccess: (state, action) => {
            state.loading = false;
            state.blogs.splice(
                state.blogs.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteBlogFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        // update blog
        updateBlogStart: (state) => {
            state.loading = true;
            state.error = false;

        },

        updateBlogSuccess: (state, action) => {
            state.loading = false;
            state.blogs[
                state.blogs.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.blog;
        },
        updateBlogFailure: (state) => {
            state.error = true;
            state.loading = false;
        },
        // new blog
        
        newBlogStart: (state) => {
            state.loading = true;
            state.error = false;

        },

        newBlogSuccess: (state, action) => {
            state.loading = false;
            state.blogs.push(action.payload);
            
        },
        newBlogFailure: (state) => {
            state.error = true;
            state.loading = false;
        },


    }
});

export const {
    getBlogsStart,
    getBlogsSuccess,
    getBlogsFailure,

    deleteBlogStart,
    deleteBlogSuccess,
    deleteBlogFailure,

    updateBlogStart,
    updateBlogSuccess,
    updateBlogFailure,

    newBlogStart,
    newBlogSuccess,
    newBlogFailure,
} = blogSlice.actions;
export default blogSlice.reducer;