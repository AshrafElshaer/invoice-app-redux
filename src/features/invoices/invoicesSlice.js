import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allInvoices: [],
  filteredInvoices: [],
  selectedFilterStatus: "all",
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    // ASYNC FROM FIRBASE DB
    setInvoices: (state, { payload }) => {
      state.allInvoices = payload;
    },
    addNewInvoice: (state, { payload }) => {
      state.allInvoices.push(payload);
    },
    deleteInvoice: (state, { payload }) => {
      state.allInvoices.filter((invoice) => invoice.id !== payload.id);
    },
    updateInvoice: (state, { payload }) => {
      state.allInvoices.find((invoice) => invoice.id === payload.id);
    },
    filterBy: (state, { payload }) => {
      state.selectedFilterStatus = payload;
    },
  },
});

export const { filterBy } = invoicesSlice.actions;

export default invoicesSlice.reducer;
