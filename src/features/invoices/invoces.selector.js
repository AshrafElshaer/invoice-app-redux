import { createSelector } from "reselect";

const selectInvoicesReducer = (state) => state.invoices ;

export const selectFilterStatus = createSelector([selectInvoicesReducer], (invoice) => invoice.selectedFilterStatus);