import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
};

const slice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },

    setPost(state, action) {
      state.post = action.payload;
    },
  },
});
// reducer
export default slice.reducer;

//action
export const { setPosts, setPost } = slice.actions;
