import { createSelector } from "reselect";

const selectInvoicesReducer = (state) => state.invoices ;

export const selectFilterStatus = createSelector([selectInvoicesReducer], (invoice) => invoice.selectedFilterStatus);

export const selectFilteredInvoices = createSelector([selectInvoicesReducer], (invoice) => invoice.filteredInvoices);
export const selectInvoicesCount = createSelector([selectInvoicesReducer], (invoice) => invoice.filteredInvoices.length);