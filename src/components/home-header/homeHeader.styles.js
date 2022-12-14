import styled from "styled-components";
import { mediaQuery } from "../../styles/mediaQuerya.styles";


export const HeaderContaienr = styled.div`
  width: 100%;
  osition: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  z-index:0;
  ${mediaQuery.tablet} {
    margin-top: 3rem;
  }
  ${mediaQuery.desktop} {
    margin-top: 4rem;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  ${mediaQuery.desktop} {
    margin-right: auto;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.clrPrimary};
  margin: 0;
  font-size: 20px;
`;

export const InvoicesCount = styled.span`
  color: ${({ theme }) => theme.clrSecondary};
  font-size: 12px;
  text-transform: capitalize;

`;

export const DropdownContainer = styled.div`
  position: relative;
`;
