import PropTypes from 'prop-types';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts';
import { Spinner } from 'components/Spinner';
import {
  Item,
  ContactsContainer,
  Name,
  Number,
  ButtonsContainer,
  Button,
  CallIcon,
  UpdateIcon,
  DeleteIcon,
} from './ContactListItem.styled';

export function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  return (
    <Item>
      <ContactsContainer>
        <Name>{`${name}:`}</Name>
        <Number>{`${number}`}</Number>
      </ContactsContainer>
      <ButtonsContainer>
        <Button type="button">
          <CallIcon />
        </Button>
        <Button type="button">
          <UpdateIcon />
        </Button>
        <Button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? <Spinner size={12} /> : <DeleteIcon />}
        </Button>
      </ButtonsContainer>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
