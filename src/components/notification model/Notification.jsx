import { createPortal } from "react-dom";

const Notification = ({ msg }) => {
  return createPortal(
    <div className='notification'>
      <p>{msg}</p>
      <div className='progress' />
    </div>,
    document.getElementById("model-root")
  );
};

export default Notification;
