import { ContactListItem } from 'components/ContactListItem';
import { Section, List } from './ContactList.styled';

export function ContactList({ contacts }) {
  return (
    <Section>
      <List>
        {contacts &&
          contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
      </List>
    </Section>
  );
}
