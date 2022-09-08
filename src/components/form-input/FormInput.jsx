import { useId, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/ui/ui.selectors";

import { Label, Input, InputWrapper } from "./formInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  const id = useId();
  const selectedTheme = useSelector(selectTheme);
  const [isFocused, setIsFocused] = useState(false);
  const handleBlur = () => setIsFocused(true);

  return (
    <InputWrapper>
      <Input
        id={`${id}-${label}`}
        {...otherProps}
        selectedTheme={selectedTheme}
        isFocused={isFocused.toString()}
        onBlur={handleBlur}
      />
      <Label htmlFor={`${id}-${label}`}>
        {label}
        {label !== "Item Name" & label !== 'Qty.' & label !== 'Price' ? (
          <span>
            {label.includes("Email") ? "Invalid Email" : "Can't be empty"}
          </span>
        ):''}
      </Label>
    </InputWrapper>
  );
};

export default FormInput;
