import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../../features/invoices/invoicesSlice";
import { notifyUser } from "../../features/ui/uiSilce";
import Button from "../button/Button";

import { ConfirmModel, Overlay } from "./confirm.styles";

const Confirm = ({ invoice, closeModel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteInvoice = () => {
    dispatch(deleteInvoice(invoice.id));
    dispatch(
      notifyUser(
        `Invoice # ${invoice.id} has been successfully Deleted.`
      )
    );
    navigate("/");

  };

  return createPortal(
    <>
      <Overlay />
      <ConfirmModel>
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete invoice # {invoice.id} This action
          cannot be undone.
        </p>
        <div>
          <Button buttonType='black' onClick={closeModel}>
            Cancel
          </Button>
          <Button buttonType='red' onClick={handleDeleteInvoice}>
            Delete
          </Button>
        </div>
      </ConfirmModel>
    </>,
    document.getElementById("model-root")
  );
};

export default Confirm;
