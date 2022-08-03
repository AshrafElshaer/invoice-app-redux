import { useSelector } from "react-redux";
import {
  selectFilteredInvoices,
  selectInvoicesCount,
} from "../../features/invoices/invoces.selector";

import IMAGES from "../../assets/images";
import InvoicePreview from "../invoice-preview/InvoicePreview";

import {
  InvoicesListContainer,
  EmptyInvoicesContainer,
} from "./invoicesList.styles";

const InvoicesList = () => {
  const invoices = useSelector(selectFilteredInvoices);
  const invoicesCount = useSelector(selectInvoicesCount);
  return (
    <InvoicesListContainer>
      {!invoicesCount ? (
        <EmptyInvoicesContainer>
          <img src={IMAGES.empryIllusration} alt='no invoces found' />
          <h2>There is nothing here</h2>

          <p>
            Create a new invoice by clicking the <b>New Invoice</b> button to
            get started .
          </p>
        </EmptyInvoicesContainer>
      ) : (
        invoices.map((invoice) => (
          <InvoicePreview invoice={invoice} key={invoice.id} />
        ))
      )}
    </InvoicesListContainer>
  );
};

export default InvoicesList;
