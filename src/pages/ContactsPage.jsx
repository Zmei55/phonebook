import { ContactEditor } from 'components/ContactEditor';
import { ContactFilter } from 'components/ContactFilter';
import { ContactList } from 'components/ContactList';

export function ContactsPage() {
  return (
    <>
      <ContactEditor />
      <ContactFilter />
      <ContactList />
    </>
  );
}
