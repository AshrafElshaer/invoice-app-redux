import { todayDate } from "./fotmatDate";
export const invoiceFormTemplate = {
    id: '',
    createdAt: todayDate,
    paymentDue: '',
    description: '',
    paymentTerms: 1,
    clientName: '',
    clientEmail: '',
    status: 'pending',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [
      {
        id: 0,
        name: '',
        quantity: 1,
        price: 1,
        total: 0,
      },
    ],
    total: 0,
  };