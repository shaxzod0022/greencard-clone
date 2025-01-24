import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    userNames: {},
    gender: {},
    dateOfBirth: {},
    nativeRegion: {},
    userPhoto: {},
    mailingAddress: {},
    countryOfResidence: {},
    phoneNumber: {},
    emails: {},
    educationLevel: {},
    maritalStatus: {},
    numberChildren: {},
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { key, name, value } = action.payload;
      if (!state.data[key]) {
        state.data[key] = {};
      }
      state.data[key][name] = value;
    },
    clearForm: (state) => {
      state.data = { ...initialState.data };
    },
  },
});

export const { updateInput, clearForm } = formSlice.actions;
export default formSlice.reducer;
