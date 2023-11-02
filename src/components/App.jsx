import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { GiRotaryPhone } from 'react-icons/gi';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

import {
  Container,
  FormContainer,
  StatisticsContainer,
  ContactsHeading,
  MainHeading,
  NoContactsText,
} from './Container.styled';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

Notify.init({
  borderRadius: '11px',
  position: 'top-right',
  width: '400px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onRemoveContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    Notify.success('The contact has been successfully removed');
  };

  const onAddingContact = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.info(`${name} is already among your contacts`);
    }

    console.log({ name, number });
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, contact]);
    Notify.success(`${name} has been successfully added to your contacts`);
  };

  const onFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <FormContainer>
        <MainHeading>
          Phonebook <GiRotaryPhone />
        </MainHeading>
        <ContactForm onSubmit={onAddingContact} />
      </FormContainer>
      <StatisticsContainer>
        <ContactsHeading>Contacts</ContactsHeading>
        <Filter value={filter} onChange={onFilterChange} />
        {contacts.length ? (
          <ContactList
            contacts={filteredContacts()}
            onRemoveContact={onRemoveContact}
          />
        ) : (
          <NoContactsText>
            There are no contacts in your phoneboook
          </NoContactsText>
        )}
      </StatisticsContainer>
    </Container>
  );
};
