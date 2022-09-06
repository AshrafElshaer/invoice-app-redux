import styled from "styled-components";

export const ConfirmModel = styled.div`
  max-width: 600px;
  min-width:320px;
  margin: auto;
  padding: 1rem;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.clrBgSecondary};
  border-radius: 0.5rem;  z-index: 3;

  h1{
    color: ${({theme})=> theme.clrPrimary};
  }
  p{
    color: ${({theme})=> theme.clrSecondary};
  }
  div{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    margin-block:1rem;
  }

`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;


