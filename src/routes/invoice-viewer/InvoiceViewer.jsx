import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/helper/fotmatDate";
import { notifyUser } from "../../features/ui/uiSilce";
import { updateInvoice } from "../../features/invoices/invoicesSlice";
import { selectInvoices } from "../../features/invoices/invoces.selector";
import Button from "../../components/button/Button";
import Status from "../../components/status/Status";
import Confirm from "../../components/confirmation model/Confirm";
import IMAGES from "../../assets/images";
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
import InvoiceForm from "../../components/invoice-form/InvoiceForm";
import { useEffect } from "react";
import { selectUser } from "../../features/user/user.selectors";

const InvoiceViewer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { invoiceId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const invoice = useSelector(selectInvoices).find((el) => el.id === invoiceId);
  useEffect(() => {
    invoice === undefined && navigate("/");
  });
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
    total,
  } = invoice;

  const handleMarkAsPaid = () => {
    dispatch(
      updateInvoice({
        invoice,
        payload: {
          ...invoice,
          status: "paid",
        },
        userId: user.uid,
      })
    );
    dispatch(
      notifyUser(`Invoice # ${id} has been successfully marked as paid.`)
    );
  };
  const toggleIsForm = () => setIsFormOpen(!isFormOpen);
  const editInvoice = () => toggleIsForm();
  const toggleConfirmModel = () => setIsConfirmationOpen(!isConfirmationOpen);

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
          {status === "pending" && (
            <>
              <Button buttonType='black' onClick={editInvoice}>
                Edit
              </Button>
              <Button buttonType='red' onClick={toggleConfirmModel}>
                Delete
              </Button>
              <Button buttonType='purple' onClick={handleMarkAsPaid}>
                Mark as Paid
              </Button>
            </>
          )}
          {status === "draft" && (
            <>
              <Button buttonType='black' onClick={editInvoice}>
                Edit
              </Button>
              <Button buttonType='red' onClick={toggleConfirmModel}>
                Delete
              </Button>
            </>
          )}
          {status === "paid" && (
            <Button buttonType='red' onClick={toggleConfirmModel}>
              Delete
            </Button>
          )}
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
              <span>Amount Due</span>
            </Cell>
            <Cell>
              <h2>$ {total}</h2>
            </Cell>
          </Row>
        </tfoot>
      </InvoiceWrapper>
      {isFormOpen && (
        <InvoiceForm invoice={invoice} toggleForm={toggleIsForm} />
      )}
      {isConfirmationOpen && (
        <Confirm invoice={invoice} closeModel={toggleConfirmModel} />
      )}
    </Container>
  );
};

export default InvoiceViewer;
