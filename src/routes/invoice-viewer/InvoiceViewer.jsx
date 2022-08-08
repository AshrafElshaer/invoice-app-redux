import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/helper";
import { selectInvoices } from "../../features/invoices/invoces.selector";
import Button from "../../components/button/Button";
import IMAGES from "../../assets/images";
import Status from "../../components/status/Status";
import { Container } from "../../styles/golobalStyles";
import {
  HeaderContainer,
  BackLink,
  StatusWrapper,
  ActionsWrapper,
  InvoiceWrapper,
  Row,
  Cell,
} from "./invoiceViewer.styles";
import ItemPreview from "../../components/item-preview/ItemPreview";

const InvoiceViewer = () => {
  const { invoiceId } = useParams();
  const {
    id,
    description,
    status,
    createdAt,
    senderAddress,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    items,
  } = useSelector(selectInvoices).find((el) => el.id === invoiceId);

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
        <ActionsWrapper>
          <Button buttonType='black'>Edit</Button>
          <Button buttonType='red'>Delete</Button>
          <Button buttonType='purple'>Mark as Paid</Button>
        </ActionsWrapper>
      </HeaderContainer>

      <InvoiceWrapper>
  
          <thead>
            <Row>
              <Cell>
                <h2># {id}</h2>
                <span>{description}</span>
              </Cell>
              <Cell>
                <span>{senderAddress.street}</span>
                <span>{senderAddress.city}</span>
                <span>{senderAddress.postCode}</span>
                <span>{senderAddress.country}</span>
              </Cell>
            </Row>
            <Row>
              <Cell>
                <span>Invoice Date</span>
                <h2>{formatDate(createdAt)}</h2>
                <span>Payment Due</span>
                <h2>{formatDate(paymentDue)}</h2>
              </Cell>
              <Cell>
                <span>Bill To</span>
                <h2>{clientName}</h2>
                <span>{clientAddress.street}</span>
                <span>{clientAddress.city}</span>
                <span>{clientAddress.postCode}</span>
                <span>{clientAddress.country}</span>
              </Cell>
              <Cell>
                <span>Sent to</span>
                <h2>{clientEmail}</h2>
              </Cell>
            </Row>
          </thead>

          <tbody>
            <Row>
              <Cell>
                <span>Item Name</span>
              </Cell>
              <Cell>
                <span>QTY.</span>
              </Cell>
              <Cell>
                <span>Price</span>
              </Cell>
              <Cell>
                <span>Total</span>
              </Cell>
            </Row>

            {items.map((item) => (
              <ItemPreview item={item} key={item.name} />
            ))}
          </tbody>
          <tfoot>
            <Row>
              <Cell>
                <span>Amout Due</span>
              </Cell>
              <Cell>
                <h2>$ total reducer</h2>
              </Cell>
            </Row>
          </tfoot>
      </InvoiceWrapper>
    </Container>
  );
};

export default InvoiceViewer;
