import { createSlice } from "@reduxjs/toolkit";
import INVOICES from "../../assets/data.json";

const initialState = {
  invoices: [...INVOICES],
  filteredInvoices: [...INVOICES],
  selectedFilterStatus: "total",
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    filterBy: (state, { payload }) => {
      state.selectedFilterStatus = payload;

      payload === "total"
        ? (state.filteredInvoices = state.invoices)
        : (state.filteredInvoices = state.invoices.filter(
            (invoice) => invoice.status === payload
          ));
    },
    markAsPaid: (state, { payload }) => {
      const existingInvoice = state.invoices.find(
        (invocie) => invocie.id === payload
      );
      if (existingInvoice.status === "draft") return;
      existingInvoice.status = "paid";
      state.filteredInvoices = state.invoices;
    },
    // ASYNC FROM FIRBASE DB
    setInvoices: (state, { payload }) => {
      state.invoices = payload;
    },
    addNewInvoice: (state, { payload }) => {
      state.invoices.unshift(payload);
      state.filteredInvoices = state.invoices;
    },
    updateInvoice: (state, { payload }) => {
      state.invoices = state.invoices.map((invoice) =>
        invoice.id === payload.id ? payload : invoice
      );
      state.filteredInvoices = state.invoices;

    },
    deleteInvoice: (state, { payload }) => {
      state.invoices = state.invoices.filter((invoice) => invoice.id !== payload);
      state.filteredInvoices = state.invoices;

    },

   
  },
});

export const { filterBy, markAsPaid, addNewInvoice, updateInvoice , deleteInvoice} =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
