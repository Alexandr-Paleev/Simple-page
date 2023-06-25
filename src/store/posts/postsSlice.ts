import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootStateType } from '../index';

export type PostDataType = {
  userId: number,
  id: number,
  title: string,
  body: string
};

export type PostsStateType = {
  posts: PostDataType[];
};

const initialState: PostsStateType = {
  posts: [] as PostDataType[],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setDataPosts(state, action: PayloadAction<PostDataType[]>) {
      // if (!action.payload.length) {
      //   return
      // }
      state.posts = [];
      state.posts.push(...action.payload);
    },
  },
});

export default postsSlice.reducer;
export const { setDataPosts } = postsSlice.actions;
export const selectPost = (state: RootStateType) => state.postsSlice;
