import { createSlice } from "@reduxjs/toolkit";

export const InfoSlice = createSlice({
  name: "addInfo",
  initialState: {
    submit: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.submit.push(action.payload);
    },
    removeUser: (state, action) => {
      state.submit.pop(action.payload);
    },
  },
});
export const { addUsers, removeUser } = InfoSlice.actions;
export default InfoSlice.reducer;
