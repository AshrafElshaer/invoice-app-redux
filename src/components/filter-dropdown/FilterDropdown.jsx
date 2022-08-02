import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownContainer, Label, Input } from "./filterDropdown.styles";
import { filterBy } from "../../features/invoices/invoicesSlice";
import { selectFilterStatus } from "../../features/invoices/invoces.selector";
const FilterDropdown = () => {
  const dispatch = useDispatch();
  const filterByStatus = useSelector(selectFilterStatus);
  const isAllChecked = filterByStatus.includes('all');
  const isPaidChecked = filterByStatus.includes('paid');
  const isPendingdChecked = filterByStatus.includes('pending');
  const isDraftChecked = filterByStatus.includes('draft');

  const handleChecked = (e) => {
    if (filterByStatus === e.target.value) return true;
  };
  const handleClick = (e) => {
    dispatch(filterBy(e.target.value));
  };
  return (
    <DropdownContainer>
      <Label>
        <Input
          type='radio'
          name='filter'
          id='all'
          value='all'
          onClick={handleClick}
          defaultChecked={isAllChecked}
         
        />
        All
      </Label>

      <Label>
        <Input
          type='radio'
          name='filter'
          id='paid'
          value='paid'
          onClick={handleClick}
          defaultChecked={isPaidChecked}
        />
        Paid
      </Label>

      <Label>
        <Input
          type='radio'
          name='filter'
          id='pending'
          value='pending'
          onClick={handleClick}
          defaultChecked={isPendingdChecked}
        />
        Pending
      </Label>

      <Label>
        <Input
          type='radio'
          name='filter'
          id='draft'
          value='draft'
          onClick={handleClick}
          defaultChecked={isDraftChecked}
        />
        Draft
      </Label>
    </DropdownContainer>
  );
};

export default FilterDropdown;
