import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  middleware :[logger],
  reducer: {
    user : userReducer,
    // invoices : invoicesReducer,
    // ui : uiReducer,
  },
});
