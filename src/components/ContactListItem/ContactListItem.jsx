import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts';
import { Spinner } from 'components/Spinner';
import {
  Item,
  ContactsContainer,
  Name,
  Number,
  DeleteBtn,
  DeleteIcon,
} from './ContactListItem.styled';

export function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <ContactsContainer>
        <Name>{`${name}:`}</Name>
        <Number>{`${number}`}</Number>
      </ContactsContainer>
      <DeleteBtn
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner size={12} /> : <DeleteIcon />}
      </DeleteBtn>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
