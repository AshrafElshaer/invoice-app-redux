import styled from "styled-components";
import { colors } from "../../styles/variables.styles";

const BaseStatus = styled.div`
  width: 110px;
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-inline: 18px;
  padding-block: 12px;
  border-radius: 6px;
  text-transform: capitalize;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const PaidStatus = styled(BaseStatus)`
  color: ${colors.clrGreen};
  background-color: ${colors.clrGreenBg};

  ${Dot} {
    background-color: ${colors.clrGreen};
  }
`;
export const PendingStatus = styled(BaseStatus)`
  color: ${colors.clrOrange};
  background-color: ${colors.clrOrangeBg};

  ${Dot} {
    background-color: ${colors.clrOrange};
  }
`;
export const DraftStatus = styled(BaseStatus)`
  color: ${({ theme }) => theme.clrPrimary};
  background-color: ${({ theme }) => theme.clrSecondaryBg};

  ${Dot} {
    background-color: ${({ theme }) => theme.clrPrimary};
  }
`;
