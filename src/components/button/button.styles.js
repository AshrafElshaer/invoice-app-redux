import styled from "styled-components";
import { colors } from "../../styles/variables.styles";
import { mediaQuery } from "../../styles/mediaQuerya.styles";

export const BaseButton = styled.button`
  all: unset;
  position: relative;
  color: ${({ theme }) => theme.clrPrimary};
  font-size: 12px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 2rem;
  img{
    transition : all 0.3s ease-in-out;
  }
  ${mediaQuery.desktop} {
    font-size: 1rem;
  }
`;
export const PurpleButton = styled(BaseButton)`
  color: ${colors.clrWhite};
  background-color: ${colors.clrPurple};
  min-width: 100px;


  &:hover {
    background-color: ${colors.clrPurpleHover};
  }
  img {
    background-color: white;
    width: 32pxpx;
    padding: 11px;
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
