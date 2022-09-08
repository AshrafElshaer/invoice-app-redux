import { createPortal } from "react-dom";
import { NotifacationWrapper, Progress } from "./notification.styles";

const Notification = ({ msg }) => {
  return createPortal(
    <NotifacationWrapper>
      <p>{msg}</p>
      <Progress />
    </NotifacationWrapper>,
    document.getElementById("model-root")
  );
};

export default Notification;
