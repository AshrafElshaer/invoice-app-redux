import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      const { uid, email, displayName, photoURL } = payload;
      state.userInfo = {
        uid,
        email,
        displayName,
        photoURL,
      };

    },
    signOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginUser, signOut } = userSlice.actions;

export default userSlice.reducer;
