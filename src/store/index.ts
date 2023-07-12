import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import thunk from "redux-thunk";
import { useMemo } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import usersSlice from "./users/usersSlice";
import postsSlice from "./posts/postsSlice";
import albumsSlice from "./albums/albumsSlice";

const rootReducer = combineReducers({
  usersSlice,
  postsSlice,
  albumsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(thunk),
});

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
  const dispatch = useAppDispatch();

  const boundActions = useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);

  return boundActions;
}

export type RootReducerType = typeof rootReducer;
export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<RootReducerType>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;
