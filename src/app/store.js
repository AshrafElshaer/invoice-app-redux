import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "../features/user/userSlice";
import invoicesReducer from "../features/invoices/invoicesSlice";
import uiReducer from "../features/ui/uiSilce";
import thunk from "redux-thunk";

export const store = configureStore({
  middleware: [
    logger,
    ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
  ],
  reducer: {
    user: userReducer,
    invoices: invoicesReducer,
    ui: uiReducer,
  },
});
