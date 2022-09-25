import { ContactListItem } from 'components/ContactListItem';
import { List } from './ContactList.styled';

export function ContactList({ contacts }) {
  return (
    <List>
      {contacts &&
        contacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </List>
  );
}
