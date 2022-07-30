import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "darkTheme",
  isFilterOpen: false,
  isFormOpen: false,
  model: {
    isconfirmationModelOpen: false,
    isNotificationOpen: false,
    notificationText: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme : (state , {paylod})=>{
        state.theme = paylod
    }
    
  },
});



export default uiSlice.reducer;
