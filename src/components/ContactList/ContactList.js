import { ContactsList } from './ContactList.styled';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemoveContact={onRemoveContact}
          />
        );
      })}
    </ContactsList>
  );
};
