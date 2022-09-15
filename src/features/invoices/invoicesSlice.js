import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchInvoicesFromDb,
  createNewInvoice,
  deleteInvoiceFromDb,
  updateInvoiceToDb,
} from "../../utils/firebase/firebase.utils";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async (userId) => {
    try {
      const data = await fetchInvoicesFromDb(userId);
      return data;
    } catch (e) {
      return e.message;
    }
  }
);
export const addNewInvoice = createAsyncThunk(
  "invoices/addNewInvoice",
  async (object) => {
    try {
      const { payload, userId } = object;
      await createNewInvoice(payload, userId);
      return payload;
    } catch (e) {
      return e.message;
    }
  }
);
export const updateInvoice = createAsyncThunk(
  "invoices/updateInvoice",
  async (object) => {
    const { payload, userId, invoice } = object;

    try {
      await updateInvoiceToDb(invoice, payload, userId);
      return payload;
    } catch (e) {
      return e.message;
    }
  }
);
export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (object) => {
    try {
      const { payload, userId } = object;
      await deleteInvoiceFromDb(payload, userId);
      return payload;
    } catch (e) {
      return e.message;
    }
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
    clearInvoices: (state) => {
      state.invoices = [];
      state.filteredInvoices = [];
    },
  },

  extraReducers: (builder) => {
    builder // fetch invoices from DB
      .addCase(fetchInvoices.pending, (state) => {
        state.fetchStatus = "pending";
      })
      .addCase(fetchInvoices.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.invoices = [];
          state.fetchStatus = "fulfilled";
        } else {
          state.invoices = [...payload];
          state.filteredInvoices = state.invoices;
          state.fetchStatus = "fulfilled";
        }
      })
      .addCase(fetchInvoices.rejected, (state, { payload }) => {
        state.fetchStatus = "rejected";
        alert(payload);
      });
    builder // add new invoice
      .addCase(addNewInvoice.fulfilled, (state, { payload }) => {
        state.invoices.unshift(payload);
        state.filteredInvoices = state.invoices;
      });
    builder // update invoice
      .addCase(updateInvoice.fulfilled, (state, { payload }) => {
        state.invoices = state.invoices.map((invoice) =>
          invoice.id === payload.id ? payload : invoice
        );
        state.filteredInvoices = state.invoices;
      });
    builder.addCase(updateInvoice.rejected, (state, { payload }) => {
      alert(payload);
    });
    builder // delete invocie
      .addCase(deleteInvoice.fulfilled, (state, { payload }) => {
        state.invoices = state.invoices.filter(
          (invoice) => invoice.id !== payload.id
        );
        state.filteredInvoices = state.invoices;
      })
      .addCase(deleteInvoice.rejected, (state, { payload }) => {
        alert(payload);
      });
  },
});

export const { filterBy, clearInvoices } = invoicesSlice.actions;

export default invoicesSlice.reducer;
