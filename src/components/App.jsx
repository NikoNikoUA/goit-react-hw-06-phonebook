import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { GiRotaryPhone } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { getContacts } from '../../src/redux/selectors';

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
  const contacts = useSelector(getContacts);

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
