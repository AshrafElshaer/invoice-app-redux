import { useState } from "react";
import { createPortal } from "react-dom";
import { todayDate } from "../../utils/helper/fotmatDate";
import { invoiceFormTemplate } from "../../utils/helper/invoice-form-template";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import { InputWrapper, Label } from "../form-input/formInput.styles";
import {
  FromContainer,
  Header,
  Title,
  Select,
  FlexRow,
  Overlay,
  ItemsList,
  ListContainer,
} from "./invoiceForm.styles";

const InvoiceForm = ({ invoice = invoiceFormTemplate }) => {
  const [formFields, setFormFields] = useState(invoice);
  // useEffect(() => {
  //   console.log(formFields);
  // }, [formFields]);

  const addNewItem = () => {
    const newItem = {
      name: '',
      price: 0,
      quantity: 0,
      total: 0,
    };
    setFormFields({
      ...formFields,
      items: [...formFields.items, newItem],
    });
  };
  const deleteItem = (index) =>
    // console.log(index)
    formFields.items.length > 1
      ? setFormFields({
          ...formFields,
          items: formFields.items.filter((_, idx) => idx !== index),
        })
      : setFormFields({ ...formFields, items: [] });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSenderChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      senderAddress: { ...formFields.senderAddress, [name]: value },
    });
  };
  const handleClientChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      clientAddress: { ...formFields.clientAddress, [name]: value },
    });
  };

  const handleItemChange = (e, index) => {
    const value = [...formFields.items];
    if (e.target.type === "number") {
      value[index][e.target.name] = Number(e.target.value);
      value.forEach(
        (item) => (item.total = Number(item.quantity * item.price).toFixed(2))
      );
    } else {
      value[index][e.target.name] = e.target.value;
    }

    setFormFields({
      ...formFields,
      items: value,
    });
  };

  return createPortal(
    <FromContainer>
      <Overlay />
      {invoice.id ? (
        <Header>Edit # {invoice.id}</Header>
      ) : (
        <Header>New Invoice</Header>
      )}

      <Title>Bill From</Title>

      <FormInput
        label='Street Address'
        type='text'
        name='street'
        onChange={handleSenderChange}
        value={formFields.senderAddress.street}
      />
      <FlexRow>
        <FormInput
          label='City'
          type='text'
          name='city'
          onChange={handleSenderChange}
          value={formFields.senderAddress.city}
        />
        <FormInput
          label='Post Code'
          type='text'
          name='postCode'
          onChange={handleSenderChange}
          value={formFields.senderAddress.postCode}
        />
        <FormInput
          label='Counrty'
          type='text'
          name='country'
          onChange={handleSenderChange}
          value={formFields.senderAddress.country}
        />
      </FlexRow>

      <Title>Bill To</Title>

      <FormInput
        label='Client Name'
        type='text'
        name='clientName'
        onChange={handleChange}
        value={formFields.clientName}
      />
      <FormInput
        label='Client Email'
        type='email'
        name='clientEmail'
        onChange={handleChange}
        value={formFields.clientEmail}
      />
      <FormInput
        label='Street Address'
        type='text'
        name='street'
        onChange={handleClientChange}
        value={formFields.clientAddress.street}
      />
      <FlexRow>
        <FormInput
          label='City'
          type='text'
          name='city'
          onChange={handleClientChange}
          value={formFields.clientAddress.city}
        />
        <FormInput
          label='Post Code'
          type='text'
          name='postCode'
          onChange={handleClientChange}
          value={formFields.clientAddress.postCode}
        />
        <FormInput
          label='Counrty'
          type='text'
          name='country'
          onChange={handleClientChange}
          value={formFields.clientAddress.country}
        />
      </FlexRow>
      <FlexRow>
        <FormInput
          label='Issue Date'
          type='date'
          name='createdAt'
          onChange={handleChange}
          min={todayDate}
          value={formFields.createdAt}
        />
        <InputWrapper>
          <Label htmlFor='paymentTerms'>Payment Terms</Label>
          <Select
            name='paymentTerms'
            onChange={handleChange}
            value={formFields.paymentTerms}>
            <option value='1'>Next 1 Day</option>
            <option value='7'>Next 7 Days</option>
            <option value='14'>Next 14 Days</option>
            <option value='30'>Next 30 Days</option>
          </Select>
        </InputWrapper>
      </FlexRow>

      <FormInput
        label='Project Description'
        type='text'
        name='description'
        onChange={handleChange}
        value={formFields.description}
      />

      <ItemsList>
        <h2>Items List</h2>
        {formFields.items.map((item, index) => (
          <ListContainer key={index}>
            <FormInput
              label='Item Name'
              name='name'
              type='text'
              value={item.name}
              onChange={(e) => handleItemChange(e, index)}
            />
            <FormInput
              label='Qty.'
              name='quantity'
              type='number'
              // min='1'
              value={item.quantity}
              onChange={(e) => handleItemChange(e, index)}
            />
            <FormInput
              label='Price'
              name='price'
              type='number'
              value={item.price}
              onChange={(e) => handleItemChange(e, index)}
            />
            <FormInput
              label='Total'
              name='total'
              type='number'
              value={item.total}
              disabled={true}
            />

            <DeleteIcon onClick={() => deleteItem(index)} />
          </ListContainer>
        ))}

        <Button buttonType='black' onClick={addNewItem}>
          + Add New Item
        </Button>
      </ItemsList>

      <div style={{ display: "flex" }}>
        <Button buttonType='black'>Discord</Button>
        <Button buttonType='black'>Save as draft</Button>
        <Button buttonType='purple'>Save & Send</Button>
      </div>
    </FromContainer>,
    document.getElementById("model-root")
  );
};

export default InvoiceForm;
