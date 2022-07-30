import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allInvoices : [],
    filteredInvoices : [],
  };
  
  const invoicesSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        // ASYNC FROM FIRBASE DB
      setInvoices : (state,{payload}) =>{
        state.allInvoices = payload
      },
      addNewInvoice: (state,{payload})=>{
        state.allInvoices.push(payload)
      },
      deleteInvoice : (state,{payload})=>{
        state.allInvoices.filter(invoice => invoice.id !== payload.id)
      },
      updateInvoice : (state,{payload}) => {
        state.allInvoices.find(invoice => invoice.id === payload.id)
      }


    },
  });

  export default invoicesSlice.reducer;