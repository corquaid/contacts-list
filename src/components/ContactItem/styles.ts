import styled from "@emotion/styled";
import { Avatar, Divider } from "@mui/material";

export const StyledItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 8px 0px;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 16px;
`;

export const StyledDetails = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDivider = styled(Divider)`
`;
