import { useDispatch, useSelector } from "react-redux";
import { DropdownContainer, Label, Input } from "./filterDropdown.styles";
import { filterBy } from "../../features/invoices/invoicesSlice";
import { selectFilterStatus } from "../../features/invoices/invoces.selector";
const FilterDropdown = ({setIsFilterOpen}) => {
  const dispatch = useDispatch();
  const filterByStatus = useSelector(selectFilterStatus);
  const isAllChecked = filterByStatus.includes('total');
  const isPaidChecked = filterByStatus.includes('paid');
  const isPendingdChecked = filterByStatus.includes('pending');
  const isDraftChecked = filterByStatus.includes('draft');

  
  const handleClick = (e) => {
    dispatch(filterBy(e.target.value));
    setIsFilterOpen(false);
  };
  return (
    <DropdownContainer>
      <Label>
        <Input
          type='radio'
          name='filter'
          id='total'
          value='total'
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
