import {
  PurpleButton,
  RedButton,
  BlackButton,
  BaseButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  purple: "purple",
  red: "red",
  black: "black",
};

const getButton = (buttonType = 'base') =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.purple]: PurpleButton,
    [BUTTON_TYPE_CLASSES.red]: RedButton,
    [BUTTON_TYPE_CLASSES.black]: BlackButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherPros }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherPros}>{children}</CustomButton>;
};

export default Button;
