import styled from "styled-components";

export const NotifacationWrapper = styled.div`
  @keyframes fade {
    5% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateY(0);
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
  color: ${({ theme }) => theme.clrPrimary};
  position: fixed;
  top: 5rem;
  right: 1rem;
  display: inline-block;
  padding: 20px 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.clrBgSecondary};;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: fade 4s linear forwards;
  @media screen and (min-width : 768px){
    top:0.5rem;
  }
`;

export const Progress = styled.div`
  @keyframes progress {
    to {
      width: calc(100% - 10px);
    }
  }
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 0;
  height: 3px;
  background-image: linear-gradient(to right, rgb(146, 119, 190), rgb(124, 93, 250));
  border-radius: 4px;
  animation: progress 3s 0.25s linear forwards;
`;
