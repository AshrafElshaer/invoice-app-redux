import styled from "styled-components";
import { colors } from "../../styles/variables.styles";
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  padding: 1rem;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.clrSecondary};
  font-size: 1rem;
  margin-block: 0.75rem;
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;
  span {
    display: none;
  }
`;

export const Input = styled.input`
  all: unset;
  color: ${({ theme }) => theme.clrPrimary};
  font-weight: bold;
  caret-color: ${colors.clrPurple};
  padding: 12px;
  outline: none;
  border-radius: 8px;
  ${({ selectedTheme }) =>
    selectedTheme === "lightTheme"
      ? "border : 2px solid rgba(223, 227, 250, 1)"
      : "border : none"};

  background-color: ${({ theme }) => theme.clrBgSecondary};
  &:focus {
    outline: none;
  }
  ${({ isFocused }) =>
  isFocused === "true"
    && `&:invalid {
      border: 1px solid red;
    }
    &:invalid ~ label {
      color: red;
      span {
        display: block;
      }
    }`
    };
  

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
