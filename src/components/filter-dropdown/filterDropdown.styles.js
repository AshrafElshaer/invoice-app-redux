import styled from "styled-components";
import IMAGES from "../../assets/images";

export const DropdownContainer = styled.div`
  font-size: 1rem;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  top: 4rem;
  left: 0;

  background-color: ${({ theme }) => theme.clrBgSecondary};
  border-radius: 5px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);  

  z-index: 2;
`;

export const Label = styled.label`
  cursor: pointer;
  color: ${({ theme }) => theme.clrPrimary};
  user-select: none;

  &:hover > input {
    border: 2px solid rgba(124, 93, 250, 1);
  }
`;

export const Input = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.clrBgPrimary};
  border-radius: 2px;
  appearance: none;
  cursor: pointer;

  &:checked {
    border: 2px solid rgba(124, 93, 250, 1);
    background: url("${IMAGES.iconCheck}"), rgba(124, 93, 250, 1);
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: center;
  }
`;
