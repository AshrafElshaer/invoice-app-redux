import { DropdownContainer, Label, Input } from "./filterDropdown.styles";
const FilterDropdown = () => {
  return (
    <DropdownContainer>
      <Label>
        <Input type='radio' name='filter' id='all' value='all' />
        All
      </Label>

      <Label>
        <Input type='radio' name='filter' id='paid' value='paid' />
        Paid
      </Label>

      <Label>
        <Input type='radio' name='filter' id='pending' value='pending' />
        Pending
      </Label>

      <Label>
        <Input type='radio' name='filter' id='draft' value='draft' />
        Draft
      </Label>
    </DropdownContainer>
  );
};

export default FilterDropdown;
