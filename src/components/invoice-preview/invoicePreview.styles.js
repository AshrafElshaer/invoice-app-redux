import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/variables.styles";

export const Wrapper = styled(Link)`
  color: ${({ theme }) => theme.clrSecondary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap:1rem;
  min-height: 72px;
  padding:0.5rem;
  margin-block: 1rem;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background-color: ${({ theme }) => theme.clrBgSecondary};

  cursor: pointer;
  &:hover {
    border: 1px solid ${colors.clrPurple};
  }
  
  h2 {
    color: ${({ theme }) => theme.clrPrimary};
  }
  img {
    display: none;
  }
  @media(min-width:640px){
    img{
      display:inline-block;
    }
  }
`;
