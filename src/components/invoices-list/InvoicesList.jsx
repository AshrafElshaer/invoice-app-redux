import {  useSelector } from "react-redux";
import {
  selectfetchStatus,
  selectFilteredInvoices,
  selectInvoicesCount,
} from "../../features/invoices/invoces.selector";

import IMAGES from "../../assets/images";
import InvoicePreview from "../invoice-preview/InvoicePreview";

import {
  InvoicesListContainer,
  EmptyInvoicesContainer,
} from "./invoicesList.styles";
import Spinner from "../loading-spinner/Spinner";


const InvoicesList = () => {
  const invoices = useSelector(selectFilteredInvoices);
  const invoicesCount = useSelector(selectInvoicesCount);
  const invoicesFetchStatus = useSelector(selectfetchStatus);
  
  return (
    <InvoicesListContainer>
      {invoicesFetchStatus === "pending"? (
        <Spinner />
      ) : !invoicesCount ? (
        <EmptyInvoicesContainer>
          <img src={IMAGES.empryIllusration} alt='no invoces found' />
          <h2>There is nothing here</h2>

          <p>
            Create a new invoice by clicking the <b>New Invoice</b> button to
            get started .
          </p>
        </EmptyInvoicesContainer>
      ) : (
        invoices.map((invoice , idx) => (
          <InvoicePreview invoice={invoice} key={idx} />
        ))
      )}
    </InvoicesListContainer>
  );
};

export default InvoicesList;
