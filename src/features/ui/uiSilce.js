import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "darkTheme",
  models: {
    isFormOpen: false,
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
    toggleForm : (state) => {
      state.models.isFormOpen = !state.models.isFormOpen
    }
  },
});

export const { toggleTheme , toggleForm } = uiSlice.actions;

export default uiSlice.reducer;
