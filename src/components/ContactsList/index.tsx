import { Skeleton } from "@mui/material";
import { Contact } from "../../types";
import { FixedSizeList as List } from "react-window";
import { ContactItem } from "../ContactItem";

interface ContactsListProps {
  loading: boolean;
  error: string;
  contacts: Contact[];
  onClick: (id: number) => void;
  selected: number[];
}

export function ContactsList(props: ContactsListProps) {
  const itemRender = ({ index, style }) => (
    <div style={style}>
      <ContactItem contact={props.contacts[index]} onClick={props.onClick} selected={props.selected} />
    </div>
  );

  if (props.error) {
    return <div data-testid="error-div">{`An error occurred :( - ${props.error}`}</div>;
  }

  if (props.loading) {
    return (
      <>
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
        <Skeleton animation="pulse" width="100%" height={50} />
      </>
    );
  }

  return (
    <List height={400} itemCount={props.contacts.length} itemSize={50} width="100%">
      {itemRender}
    </List>
  );
}
