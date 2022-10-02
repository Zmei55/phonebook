import { useState } from 'react';
import { useGetAllContactsQuery } from 'redux/contacts';
import { ContactSection } from 'components/ContactSection';
import { ContactList } from 'components/ContactList';

export function ContactsPage() {
  const [filterValue, setFilterValue] = useState('');
  const { data: contacts, isFetching } = useGetAllContactsQuery();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      <ContactSection filterValue={filterValue} handleFilter={setFilterValue} />
      <ContactList contacts={filteredContacts} />
    </>
  );
}
