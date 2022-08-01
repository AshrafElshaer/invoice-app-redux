import styled from "styled-components";
import { colors } from "../../styles/variables.styles";

export const BaseButton = styled.button`
  all: unset;
  color:${({theme})=> theme.clrPrimary};
  font-size:12px;
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  cursor: pointer;
  padding : 0.75rem;
  margin-inline: 0.5rem;
  border-radius: 2rem;

  
`;
export const PurpleButton = styled(BaseButton)`
  color: ${colors.clrWhite};
  background-color: ${colors.clrPurple};

  &:hover {
    background-color: ${colors.clrPurpleHover};
  }
  img{
    background-color: white;
    width:32pxpx;
    padding:11px;
    border-radius: 50%;
  }
`;
export const BlackButton = styled(BaseButton)`
  color: ${({ theme }) => theme.clrSecondary};
  background-color: ${({ theme }) => theme.clrBtnPrimaryBg};

  &:hover {
    color: ${({ theme }) => theme.clrBtnHoverPrimary};
    background-color: ${({ theme }) => theme.clrBtnHoverBg};
  }
`;
export const RedButton = styled(BaseButton)`
  color: ${colors.clrWhite};
  background-color: ${colors.clrRed};

  &:hover {
    background-color: ${colors.clrRedHover};
  }
`;
