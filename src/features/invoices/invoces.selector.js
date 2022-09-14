import { createSelector } from "reselect";

const selectInvoicesReducer = (state) => state.invoices;

export const selectInvoices = createSelector(
    [selectInvoicesReducer],
    (invoices) => invoices.invoices
  );

export const selectFilterStatus = createSelector(
  [selectInvoicesReducer],
  (invoices) => invoices.selectedFilterStatus
);

export const selectFilteredInvoices = createSelector(
  [selectInvoicesReducer],
  (invoices) => invoices.filteredInvoices
);
export const selectInvoicesCount = createSelector(
  [selectInvoicesReducer],
  (invoices) => invoices.filteredInvoices.length
);
export const selectfetchStatus = createSelector(
  [selectInvoicesReducer],
  (invoices) => invoices.fetchStatus
 
);
