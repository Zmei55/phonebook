// import PropTypes from 'prop-types';
import { Button } from './AddContactBtn.styled';

export function AddContactBtn({ children, onClick, ...allProps }) {
  return (
    <Button type="button" onClick={onClick} {...allProps}>
      {children}
    </Button>
  );
}

AddContactBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

// AddContactBtn.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };
