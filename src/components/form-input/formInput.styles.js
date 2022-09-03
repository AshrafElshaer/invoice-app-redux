import styled from "styled-components";
import { colors } from "../../styles/variables.styles";
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  // min-width: 150px;
  padding: 1rem;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.clrSecondary};
  font-size: 1rem;
  margin-block: 0.75rem;
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
