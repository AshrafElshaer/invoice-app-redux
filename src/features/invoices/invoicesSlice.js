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
    // ASYNC FROM FIRBASE DB
    setInvoices: (state, { payload }) => {
      state.invoices = payload;
    },
    addNewInvoice: (state, { payload }) => {
      state.invoices.push(payload);
    },
    deleteInvoice: (state, { payload }) => {
      state.invoices.filter((invoice) => invoice.id !== payload.id);
    },
    updateInvoice: (state, { payload }) => {
      state.invoices.find((invoice) => invoice.id === payload.id);
    },
    

    filterBy: (state, { payload }) => {
      state.selectedFilterStatus = payload;

      payload === "total"
        ? (state.filteredInvoices = state.invoices)
        : (state.filteredInvoices = state.invoices.filter(
            (invoice) => invoice.status === payload
          ));
    },
    markAsPaid : (state, { payload })=>{
      
      const existingInvoce = state.invoices.find(invocie => invocie.id === payload);

      if(existingInvoce.status === 'draft') return;
      
      existingInvoce.status = 'paid';
      state.filteredInvoices = state.invoices

    },
  },
});

export const { filterBy , markAsPaid} = invoicesSlice.actions;

export default invoicesSlice.reducer;
