import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    add(state, action) {
      return action.payload;
    }
  }
});

export const { add } = dataSlice.actions;
export default dataSlice.reducer;
