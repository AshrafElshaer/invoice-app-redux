import { createSelector } from "reselect";

const selcetUiReducer = (state) => state.ui;

export const selectTheme = createSelector([selcetUiReducer], (ui) => ui.theme);
