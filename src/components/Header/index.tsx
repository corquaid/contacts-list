import { Typography } from "@mui/material";
import { StyledAppBar, StyledToolbar } from "./styles";

export function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar variant="dense">
        <Typography>Contacts</Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
}
