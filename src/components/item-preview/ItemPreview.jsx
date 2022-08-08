import React from "react";
import { Row ,Cell } from "../../routes/invoice-viewer/invoiceViewer.styles";

const ItemPreview = ({ item }) => {
  const { name, quantity, price, total } = item;
  return (
    <Row>
      <Cell><h3>{name}</h3></Cell>
      <Cell><h3>{quantity}</h3></Cell>
      <Cell><h3>$ {price}</h3></Cell>
      <Cell><h3>$ {total}</h3></Cell>
    </Row>
  );
};

export default ItemPreview;
