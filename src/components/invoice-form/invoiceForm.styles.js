import styled from "styled-components";
import { colors } from "../../styles/variables.styles";

export const FromContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.clrBgPrimary};
  position: absolute;
  left: 0;
  top: 4.5rem;
  z-index: 1000;
  border-radius: 8px;

  @media screen and (min-width: 620px) {
    width: 616px;
  }

  @media screen and (min-width: 768px) {
    left: 4.5rem;
    top: 0;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 38.5rem;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  @media screen and (min-width: 768px) {
    left: 43rem;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.clrPrimary};
  width: 100%;
  display: block;
  text-align: center;
`;

export const Title = styled.h5`
  display: block;
  color: ${colors.clrPurple};
  width: 100%;
  padding-left: 0.5rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  // gap: 1rem;

`;

export const Select = styled.select`
  color: ${({ theme }) => theme.clrPrimary};
  flex: 1;
  padding: 18px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  ${({ theme }) =>
    theme === "lightTheme"
      ? "border : 2px solid rgba(223, 227, 250, 1)"
      : "border : none"};

  background-color: ${({ theme }) => theme.clrBgSecondary};
`;
