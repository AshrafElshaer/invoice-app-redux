import { todayDate } from "./fotmatDate";
export const invoiceFormTemplate = {
  id: "",
  createdAt: todayDate,
  paymentDue: "",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "pending",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
};
