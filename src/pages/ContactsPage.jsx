import { useState } from 'react';
import { useGetAllContactsQuery } from 'redux/contacts';
import { ContactForm } from 'components/ContactForm';
import { ContactFilter } from 'components/ContactFilter';
import { ContactList } from 'components/ContactList';

export function ContactsPage() {
  const [filterValue, setFilterValue] = useState('');
  const { data: contacts, isFetching } = useGetAllContactsQuery();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      <ContactForm />
      <ContactFilter filterValue={filterValue} handleFilter={setFilterValue} />
      <ContactList contacts={filteredContacts} />
    </>
  );
}
