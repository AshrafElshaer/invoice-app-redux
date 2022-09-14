import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "darkTheme",
  isNotificationOpen: false,
  notificationMsg: "invoice has been sucessfully deleted",
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
    toggleForm: (state) => {
      state.models.isFormOpen = !state.models.isFormOpen;
    },
    notifyUser: (state, { payload }) => {
      state.notificationMsg = payload;
      state.isNotificationOpen = true;
    },
    closeNotification: (state) => {
      state.notificationMsg = "";
      state.isNotificationOpen = false;
    },
  },
});

export const { toggleTheme, toggleForm, notifyUser ,closeNotification} = uiSlice.actions;

export default uiSlice.reducer;
