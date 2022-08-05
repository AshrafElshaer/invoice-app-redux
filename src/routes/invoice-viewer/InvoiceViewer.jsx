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
} from "./invoiceViewer.styles";


const InvoiceViewer = () => {
  const { invoiceId } = useParams();
  const { id, description, status, createdAt, senderAddress } = useSelector(
    selectInvoices
  ).find((el) => el.id === invoiceId);
  
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
      <div className='invoiceWrapper'>
        <table className='header-table'>
          <tbody>
            <tr>
              <td>
                <h2>#{id}</h2>
                <span>{description}</span>
              </td>
              <td>
                <span>
                  {senderAddress.street}
                  {senderAddress.city}
                  {senderAddress.postCode}
                  {senderAddress.country}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Invoice Date</span>
                <h2>
                  {formatDate(createdAt)}
                </h2>
                <span>Payment Due</span>
                <h2>paymentDue</h2>
              </td>
              <td>
                <span>Bill To</span>
                <h2>clientName</h2>
                <span>clientAddress</span>
              </td>
              <td>
                <span>Sent to</span>
                <h2>clientEmail</h2>
              </td>
            </tr>
          </tbody>
        </table>
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
      </div>
    </Container>
  );
};

export default InvoiceViewer;
