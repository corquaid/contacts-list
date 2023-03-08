import { Checkbox } from "@mui/material";
import { Contact } from "../../types";
import { StyledItemContainer, StyledAvatar, StyledDetails, StyledDivider } from "./styles";

interface ContactItemProps {
  contact: Contact;
  onClick: (id: number) => void;
  selected: number[];
}

export function ContactItem(props: ContactItemProps) {
  return (
    <>
      <StyledItemContainer onClick={() => props.onClick(props.contact.id)} data-testid="contact-item">
        <StyledAvatar src={props.contact.avatar} alt={props.contact.first_name} variant="rounded" />
        <StyledDetails>
          <div>
            {props.contact.first_name} {props.contact.last_name}
          </div>
          <Checkbox checked={props.selected.includes(props.contact.id)} />
        </StyledDetails>
      </StyledItemContainer>
      <StyledDivider />
    </>
  );
}
