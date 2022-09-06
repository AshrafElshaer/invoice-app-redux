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

  option {
    font-weight: bold;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-inline: 1rem;
  margin-bottom:3rem;

  h2 {
    color: ${({ theme }) => theme.clrSecondary};
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 80px 120px 120px 24px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 80px 120px 120px 80px;

    & div:first-of-type {
      grid-column: 1/ 6;
    }
  }

  svg {
    width: 25px;
    height: 30px;
    margin-top: 3rem;
    cursor: pointer;
    &:hover path {
      fill: ${colors.clrRed};
    }
    path {
      transform: scale(1.6);
      transition: fill 0.2s ease-in-out;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display:flex;
  flex-direction: row-reverse;
  aligh-items:center;
  gap:0.5rem;
  padding-inline:1rem;

  button:nth-of-type(3){
    margin-right:auto;
  }
`
