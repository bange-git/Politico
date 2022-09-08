import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPost = createAsyncThunk("post/getPost", async ({id}) => {
 
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
  
  console.log(data);

});
export const deletePost = createAsyncThunk("post/deletePost", async({id}) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
})



const initialState = {
  posts: [],
  loading: false,
  error:null,
}

const postSlice = createSlice({
  name:'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.pending]: (state) => {
     state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
     },

    [getPost.rejected]: (state,action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
     },

  }
})

export default postSlice.reducer;