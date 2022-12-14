import styled from "styled-components";

export const AuthenticationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  form {
    width: 70%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
      padding-top: 5rem;
    }
    div {
      padding: 0;
    }
    h2 {
      color: ${({ theme }) => theme.clrSecondary};
      text-align: center;
    }
    button {
      flex: 1;
      margin-block: 2rem;
    }
  }
`;

export const SwitchAuthWrapper = styled.div`
  color: ${({ theme }) => theme.clrSecondary};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    color: ${({ theme }) => theme.clrPrimary};
    margin-inline: 0.5rem;
    cursor: pointer;
  }
`;
