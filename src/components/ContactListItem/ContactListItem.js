import { BtnDeleteItem, ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onRemoveContact }) => {
  return (
    <ListItem key={id}>
      {name}: {number}
      <BtnDeleteItem onClick={() => onRemoveContact(id)}>Remove</BtnDeleteItem>
    </ListItem>
  );
};
