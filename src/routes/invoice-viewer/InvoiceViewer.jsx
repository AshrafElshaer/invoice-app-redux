import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectInvoices } from "../../features/invoices/invoces.selector";
import Button from "../../components/button/Button";
import IMAGES from "../../assets/images";
import Status from "../../components/status/Status";
import { Container } from "../../styles/golobalStyles";
import {
  HeaderContainer,
  BackLink,
  StatusWrapper,
} from "./invoiceViewer.styles";
const InvoiceViewer = () => {
  const { invoiceId } = useParams();
  const { status } = useSelector(selectInvoices).find(
    (el) => el.id === invoiceId
  );

  return (
    <Container>
      <BackLink to='/'>
        <img src={IMAGES.iconArrowLeft} alt='back to home' />
        Go Back
      </BackLink>
      <HeaderContainer>
        <StatusWrapper>
          Status <Status statusType={status} />
        </StatusWrapper>

        <Button buttonType='black'>Edit</Button>
        <Button buttonType='red'>Delete</Button>
        <Button buttonType='purple'>Mark as Paid</Button>
      </HeaderContainer>
      InvoiceViewer
    </Container>
  );
};

export default InvoiceViewer;
