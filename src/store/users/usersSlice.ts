import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootStateType } from '../index';

export type UserDataType = {
  id: 1,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
};

export type UsersStateType = {
  users: UserDataType[];
};

const initialState: UsersStateType = {
  users: [] as UserDataType[],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setDataUsers(state, action: PayloadAction<UserDataType[]>) {
      // if (!action.payload.length) {
      //   return
      // }
      state.users = [];
      state.users.push(...action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { setDataUsers } = usersSlice.actions;
export const selectUser = (state: RootStateType) => state.usersSlice;
