import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPost } from "../interfaces/post";

const initialState: { posts: Array<IPost>; newPosts: Array<IPost> } = {
  posts: [],
  newPosts: [],
};

const postSlice = createSlice({
  name: "filterPost",
  initialState: initialState,
  reducers: {
    filterPosts: (
      state: { posts: Array<IPost>; newPosts: Array<IPost> },
      action: PayloadAction<Array<IPost>>,
    ) => {
      state.posts = [...action.payload];
    },
    filterNewPosts: (
      state: { posts: Array<IPost>; newPosts: Array<IPost> },
      action: PayloadAction<any>,
    ) => {
      return { ...state, newPosts: action.payload };
    },
  },
});

const { reducer: postReducer, actions } = postSlice;

export const { filterPosts, filterNewPosts } = actions;

export default postReducer;
