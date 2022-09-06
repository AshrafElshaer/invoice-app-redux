import { createSelector } from "reselect";

const selcetUiReducer = (state) => state.ui;

export const selectTheme = createSelector([selcetUiReducer], (ui) => ui.theme);
export const selectIsNotificationOpen = createSelector([selcetUiReducer], (ui) => ui.isNotificationOpen);

export const selectNotificationMsg = createSelector([selcetUiReducer], (ui) => ui.notificationMsg);
