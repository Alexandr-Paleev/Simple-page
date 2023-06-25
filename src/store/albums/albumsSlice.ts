import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootStateType } from '../index';

export type AlbumsDataType = {
  userId: number,
  id: number,
  title: string
};

export type AlbumsStateType = {
  albums: AlbumsDataType[];
};

const initialState: AlbumsStateType = {
  albums: [] as AlbumsDataType[],
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setDataAlbums(state, action: PayloadAction<AlbumsDataType[]>) {
      state.albums = [];
      state.albums.push(...action.payload);
    },
  },
});

export default albumsSlice.reducer;
export const { setDataAlbums } = albumsSlice.actions;
export const selectAlbums = (state: RootStateType) => state.albumsSlice;
