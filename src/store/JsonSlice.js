import { createSlice } from "@reduxjs/toolkit";

export const JsonSlice = createSlice({
  name: "jsonInput",
  initialState: { jsonValue: [] },
  reducers: {
    updateJsonValue: (state, action) => {
      state.jsonValue = action.payload;
    },
  },
});

export const { updateJsonValue } = JsonSlice.actions;
export default JsonSlice.reducer;
