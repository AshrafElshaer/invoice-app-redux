import styled from "styled-components";
import { mediaQuery } from "./styles/mediaQuerya.styles";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${mediaQuery.desktop}{
    flex-direction: row;
  }
`;



