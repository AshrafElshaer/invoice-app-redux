import styled from "styled-components";

import { colors } from "../../styles/variables.styles";
import { mediaQuery } from "../../styles/mediaQuerya.styles";

export const AsideBarWrapper = styled.aside`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom-right-radius: 20px;
  background-color: ${colors.clrAsidBarBg};

  ${mediaQuery.desktop} {
    width: 72px;
    height: 100vh;
    flex-direction: column;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
  }
`;

export const Logo = styled.img`
  background-color: ${colors.clrPurpleHover};
  width: 73px;
  padding: 1rem;
  margin-right: auto;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  ${mediaQuery.desktop} {
    margin-bottom: auto;
  }
`;
export const ToggleSwitch = styled.img`
  width: 20px;
  margin-inline: 1.5rem;
  cursor: pointer;
  ${mediaQuery.desktop} {
    margin-block: 1.5rem;
  }
`;

export const Profile = styled.img`
  width: 72px;
  margin-inline: 1rem;
  padding: 1rem;
  border-radius: 50%;
`;
