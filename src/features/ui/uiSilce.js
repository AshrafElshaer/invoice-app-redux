import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "darkTheme",
  isFilterOpen: false,
  isFormOpen: false,
  model: {
    isConfirmationModelOpen: false,
    isNotificationOpen: false,
    notificationText: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "darkTheme"
        ? (state.theme = "lightTheme")
        : (state.theme = "darkTheme");
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
