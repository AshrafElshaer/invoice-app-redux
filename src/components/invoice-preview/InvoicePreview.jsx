import Status from "../status/Status";
import IMAGES from "../../assets/images";

import { Wrapper } from "./invoicePreview.styles";

const InvoicePreview = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status } = invoice;

  return (
    <Wrapper to={id}>
      <span>#</span>
      <h2>{id}</h2>

      <span>Due {paymentDue}</span>
      <span>{clientName}</span>
      <h2>${total}</h2>
      <Status statusType={status} />
      <img src={IMAGES.iconArrowRight} alt='view invoice' />
    </Wrapper>
  );
};

export default InvoicePreview;
