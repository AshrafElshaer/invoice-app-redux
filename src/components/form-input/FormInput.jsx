import { useId } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/ui/ui.selectors";

import { Label, Input, InputWrapper } from "./formInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  const id = useId();
  const selectedTheme = useSelector(selectTheme)
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...otherProps} selectedTheme={selectedTheme}/>
    </InputWrapper>
  );
};

export default FormInput;
