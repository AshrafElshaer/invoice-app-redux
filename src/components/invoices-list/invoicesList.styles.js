import styled from "styled-components";
import { mediaQuery } from "../../styles/mediaQuerya.styles";

export const InvoicesListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  margin-top: 2rem;
  // overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 0;
`;

export const EmptyInvoicesContainer = styled.div`
  width: 60%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mediaQuery.desktop} {
    max-width: 270px;
  }
  img {
    width: 100%;
  }
  h2 {
    color: ${({ theme }) => theme.clrPrimary};
  }
  p {
    color: ${({ theme }) => theme.clrSecondary};
  }
`;
