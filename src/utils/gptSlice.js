import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGpt } = gptSlice.actions;
