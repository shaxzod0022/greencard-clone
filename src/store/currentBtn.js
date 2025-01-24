import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: JSON.parse(localStorage.getItem("currentBtn")) ?? true,
};

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
      localStorage.setItem("currentBtn", JSON.stringify(action.payload));
    },
  },
});

export const { setCurrent } = currentSlice.actions;
export default currentSlice.reducer;
