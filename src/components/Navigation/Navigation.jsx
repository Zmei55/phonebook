import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navlink } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      {isLoggedIn && <Navlink to="/contacts">Contacts List</Navlink>}
    </nav>
  );
}
