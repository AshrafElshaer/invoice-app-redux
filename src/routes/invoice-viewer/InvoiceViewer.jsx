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

        <table className='items-table'>
          <thead>
            <tr>
              <td>
                <span>Item Name </span>
              </td>
              <td>
                <span>QTY. </span>
              </td>
              <td>
                <span>Price </span>
              </td>
              <td>
                <span>Total </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3>items.Name</h3>
              </td>
              <td>
                <h3>items.quantity</h3>
              </td>
              <td>
                <h3>items.price</h3>
              </td>
              <td>
                <h3>items.total</h3>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <span>Amout Due</span>
              </td>
              <td>
                <h1>$ total reducer</h1>
              </td>
            </tr>
          </tfoot>
        </table>
      </InvoiceWrapper>
    </Container>
  );
};

export default InvoiceViewer;
