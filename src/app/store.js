import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "../features/user/userSlice";
import invoicesReducer from "../features/invoices/invoicesSlice";
import uiReducer from "../features/ui/uiSilce";

export const store = configureStore({
  middleware: [logger],
  reducer: {
    user: userReducer,
    invoices: invoicesReducer,
    ui: uiReducer,
  },
});
