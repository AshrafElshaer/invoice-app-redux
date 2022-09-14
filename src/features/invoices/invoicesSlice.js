import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import INVOICES from "../../assets/data.json";
import {
  fetchInvoicesFromDb,
  createNewInvoice,
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

const initialState = {
  invoices: [],
  status: "idle",
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchinvoices.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchinvoices.fulfilled, (state, { payload }) => {
        state.invoices = [...payload];
        state.filteredInvoices = state.invoices;
        state.status = "fulfilled";
      })
      .addCase(addNewInvoice.fulfilled, (state, { payload }) => {
        state.invoices.unshift(payload);
        state.filteredInvoices = state.invoices;
      });
  },

  // ASYNC FROM FIRBASE DB

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
});

export const { filterBy, markAsPaid, updateInvoice, deleteInvoice } =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
