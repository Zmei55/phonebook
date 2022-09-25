import { ContactForm } from 'components/ContactForm';
import { ContactFilter } from 'components/ContactFilter';
import { ContactList } from 'components/ContactList';

export function ContactsPage() {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
}
