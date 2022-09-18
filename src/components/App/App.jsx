import { useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts';
import { Container } from 'components/Container';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Spinner } from 'components/Spinner';
import { Toaster } from 'react-hot-toast';
import { Title } from './App.styled';

export function App() {
  const [filterValue, setFilterValue] = useState('');
  const { data, isFetching } = useFetchContactsQuery(filterValue);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
      </Container>
      <Container>
        <Title>Contacts</Title>
        <Filter filterValue={filterValue} handleFilter={setFilterValue} />
        {isFetching && <Spinner />}
        {data && <ContactList contacts={data} />}
      </Container>
      <Toaster position="top-right" />
    </>
  );
}
