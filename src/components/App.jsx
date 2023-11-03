import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { GiRotaryPhone } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { getContacts } from '../../src/redux/states';

import {
  Container,
  FormContainer,
  StatisticsContainer,
  ContactsHeading,
  MainHeading,
  NoContactsText,
} from './Container.styled';

Notify.init({
  borderRadius: '11px',
  position: 'top-right',
  width: '400px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

export const App = () => {
  const { contacts } = useSelector(getContacts);
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <FormContainer>
        <MainHeading>
          Phonebook <GiRotaryPhone />
        </MainHeading>
        <ContactForm />
      </FormContainer>
      <StatisticsContainer>
        <ContactsHeading>Contacts</ContactsHeading>
        <Filter />
        {contacts.length ? (
          <ContactList />
        ) : (
          <NoContactsText>
            There are no contacts in your phoneboook
          </NoContactsText>
        )}
      </StatisticsContainer>
    </Container>
  );
};
