import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuery } from "../../styles/mediaQuerya.styles";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-inline: 2rem;
  padding-block: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.clrBgSecondary};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);

  @media (min-width: 670px) {
    flex-direction: row;
  }
`;

export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.clrSecondary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  ${mediaQuery.desktop} {
    margin-top: 4rem;
  }
`;

export const StatusWrapper = styled.div`
  color: ${({ theme }) => theme.clrSecondary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (min-width: 670px) {
    width: inherit;
    margin-right: auto;
    justify-content: flex-start;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 420px) {
    width: 100%;
  }
  @media (min-width: 550px) {
    width: inherit;
    button {
      margin-inline: 0.5rem;
    }
  }
`;
export const Cell = styled.td`
  flex: 1;

  h2,
  h3 {
    color: ${({ theme }) => theme.clrPrimary};
    margin-bottom: 0.75rem;
  }
  span {
    color: ${({ theme }) => theme.clrSecondary};
    display: block;
  }
`;
export const Row = styled.tr`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  // margin-top: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    thead {
      &:first-of-type ${Cell}:nth-of-type(2) {
        text-align: right;
      }
    }
  }
`;
export const InvoiceWrapper = styled.table`
  padding-inline: 2rem;
  padding-block: 1.25rem;
  background-color: ${({ theme }) => theme.clrBgSecondary};
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  width: 100%;

  tbody,
  tfoot {
    ${Cell} {
      padding: 1rem;
    }
  }
  tbody {
    display: block;
    margin-top: 1.5rem;
    background-color: green;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  tfoot {
    display: block;

    background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (min-width: 600px) {
    thead {
      ${Row} {
        text-align: left;
      }
      ${Row}:first-of-type ${Cell}:nth-of-type(2) {
        text-align: right;
      }
    }
    tbody {
      ${Cell} {
        text-align: center;
        &:first-of-type {
          flex: 3;
          text-align: left;
        }
      }
    }
    tfoot {
      ${Cell} {
        h2,
        span {
          margin-block: auto;
        }
        &:first-of-type {
          text-align: left;
        }
        &:last-of-type {
          text-align: right;
        }
      }
    }
  }
`;
