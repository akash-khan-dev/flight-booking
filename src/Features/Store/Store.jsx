import { combineReducers, configureStore } from "@reduxjs/toolkit";
import InfoSlice from "../Slice/InfoSlice";

const reducer = combineReducers({
  infoUser: InfoSlice,
});
export const Store = configureStore({
  reducer,
});
