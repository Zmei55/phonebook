import PropTypes from 'prop-types';
// import { Spinner } from 'components/Spinner';
import { Item, Button } from './ContactListItem.styled';

export function ContactListItem({ id, name, phone }) {
  return (
    <Item>
      <span>{`${name}`}</span>
      <span>{`${phone}`}</span>
      <Button type="button">Delete</Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
