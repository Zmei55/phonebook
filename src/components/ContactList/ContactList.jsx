import { ContactListItem } from 'components/ContactListItem';
import { Spinner } from 'components/Spinner';
import { Section, List } from './ContactList.styled';

export function ContactList({ contacts, error, isFetching }) {
  return (
    <Section>
      {isFetching ? (
        <Spinner />
      ) : (
        <List>
          {contacts ? (
            contacts.map(contact => (
              <ContactListItem key={contact.id} {...contact} error={error} />
            ))
          ) : (
            <h2>
              Ein Fehler ist aufgetreten! Im Moment können Sie nicht auf Ihre
              Kontaktliste zugreifen. Versuche es später. Wir danken Sie für Ihr
              Verständnis!
            </h2>
          )}
        </List>
      )}
    </Section>
  );
}
