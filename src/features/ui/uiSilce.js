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

export const { toggleTheme, notifyUser ,closeNotification} = uiSlice.actions;

export default uiSlice.reducer;
