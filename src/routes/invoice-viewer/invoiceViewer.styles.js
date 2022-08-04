import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuery } from "../../styles/mediaQuerya.styles";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  gap: 0.25rem;
  margin-top: 2rem;
  padding-inline: 2rem;
  padding-block: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({theme})=> theme.clrBgSecondary};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);  
  
`;

export const BackLink = styled(Link)`
color : ${({theme})=> theme.clrSecondary};
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
margin-bottom : 2rem;
margin-top : 2rem;
${mediaQuery.desktop}{
    margin-top : 4rem;

}
`;

export const StatusWrapper = styled.div`
color: ${({theme})=> theme.clrSecondary};
display:flex;
justify-content : flex-start;
align-items:center;
gap:1rem;
margin-right:auto;
`
