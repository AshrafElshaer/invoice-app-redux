import React from "react";
import { PaidStatus, Dot, DraftStatus, PendingStatus } from "./status.styles";

const Status = ({ statusType }) => {
  const STATUS_TYPE_CLASSES = {
    paid: "Paid",
    pending: "Pending",
    draft: "Draft",
  };

  const getButton = (statusType) =>
    ({
      [STATUS_TYPE_CLASSES.paid]: PaidStatus,
      [STATUS_TYPE_CLASSES.pending]: PendingStatus,
      [STATUS_TYPE_CLASSES.draft]: DraftStatus,
    }[statusType]);

  const CustomButton = getButton(statusType);
  return (
    <CustomButton>
      <Dot />
      {statusType}
    </CustomButton>
  );
};

export default Status;
