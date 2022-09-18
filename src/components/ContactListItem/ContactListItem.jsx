import { useDeleteContactMutation } from 'redux/contacts';
import PropTypes from 'prop-types';
import { Spinner } from 'components/Spinner';
import { Item, Button } from './ContactListItem.styled';

export function ContactListItem({ id, name, phone }) {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  return (
    <Item>
      <span>{`${name}: `}</span>
      <span>{phone}</span>
      <Button type="button" onClick={() => deleteContacts(id)}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
