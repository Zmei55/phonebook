import { useSelector } from 'react-redux';
import { Navlink } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <Navlink to="/" end>
        Home
      </Navlink>
      {isLoggedIn && <Navlink to="/contacts">Contacts List</Navlink>}
    </nav>
  );
}
