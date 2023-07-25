import { createSlice } from "@reduxjs/toolkit";
import { TAB_NAMES } from "../model/TabNames";

export const TabSlice = createSlice({
  name: "tabName",
  initialState: { selectedTab : TAB_NAMES.CUSTOM_FORMS },
  reducers: {
    updateTabName: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { updateTabName } = TabSlice.actions;
export default TabSlice.reducer;