import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts';
import { Spinner } from 'components/Spinner';
import { Item, Button } from './ContactListItem.styled';

export function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <span>{`${name}`}</span>
      <span>{`${number}`}</span>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        Delete
        {isDeleting && <Spinner size={12} />}
      </Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
