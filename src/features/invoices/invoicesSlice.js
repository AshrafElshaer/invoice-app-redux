import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import INVOICES from "../../assets/data.json";
import {
  fetchInvoicesFromDb,
  createNewInvoice,
  deleteInvoiceFromDb,
} from "../../utils/firebase/firebase.utils";

export const fetchinvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async (userId) => {
    try {
      const data = await fetchInvoicesFromDb(userId);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
);
export const addNewInvoice = createAsyncThunk(
  "invoices/addNewInvoice",
  async (object) => {
    const { payload, userId } = object;
    await createNewInvoice(payload, userId);
    return payload;
  }
);
export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (object) => {
    const { payload, userId } = object;
    await deleteInvoiceFromDb(payload, userId);
    return payload;
  }
);

const initialState = {
  invoices: [],
  fetchStatus: "idle",
  filteredInvoices: [],
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
    clearInvoices: (state) => {
      state.invoices = [];
      state.filteredInvoices = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchinvoices.pending, (state) => {
        state.fetchStatus = "pending";
      })
      .addCase(fetchinvoices.fulfilled, (state, { payload }) => {
        state.invoices = [...payload];
        state.filteredInvoices = state.invoices;
        state.fetchStatus = "fulfilled";
      })
      .addCase(fetchinvoices.rejected, (state) => {
        state.fetchStatus = "rejected";
      });
    builder.addCase(addNewInvoice.fulfilled, (state, { payload }) => {
      state.invoices.unshift(payload);
      state.filteredInvoices = state.invoices;
    })
    .addCase(deleteInvoice.fulfilled, (state, { payload })=>{
      state.invoices = state.invoices.filter((invoice) => invoice.id !== payload.id);
        state.filteredInvoices = state.invoices;
    })
  },

  // ASYNC FROM FIRBASE DB

  updateInvoice: (state, { payload }) => {
    state.invoices = state.invoices.map((invoice) =>
      invoice.id === payload.id ? payload : invoice
    );
    state.filteredInvoices = state.invoices;
  },
  // deleteInvoice: (state, { payload }) => {
  //   state.invoices = state.invoices.filter((invoice) => invoice.id !== payload);
  //   state.filteredInvoices = state.invoices;
  // },
});

export const { filterBy, markAsPaid, clearInvoices, updateInvoice } =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
