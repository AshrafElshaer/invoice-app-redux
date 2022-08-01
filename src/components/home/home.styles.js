import styled from "styled-components";
import { mediaQuery } from "../../styles/mediaQuerya.styles";

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 730px;
  padding-inline: 1.5rem;
  margin-inline: auto;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  ${mediaQuery.tablet} {
    margin-top: 3rem;
  }
  ${mediaQuery.desktop} {
    margin-top: 4rem;
    justify-content: flex-end;
    gap:1rem;
  }
`;

export const TitleContainer = styled.div`
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
`;