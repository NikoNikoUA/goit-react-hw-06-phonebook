import { ContactsList } from './ContactList.styled';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter } from '../../../src/redux/selectors';
import { getContacts } from '../../../src/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = filterContacts(normalizedFilter);

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
};
