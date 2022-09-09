import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    signOut: (state) => {
      state.userInfo = null;
    },
    
  },
});

export const { loginUser , signOut} = userSlice.actions;

export default userSlice.reducer;
