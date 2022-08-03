import Status from "../status/Status";

const InvoicePreview = ({ invoice }) => {
  return (
    <>
      <h1>{invoice.id}</h1>
      <Status statusType='Pending' />
    </>
  );
};

export default InvoicePreview;
