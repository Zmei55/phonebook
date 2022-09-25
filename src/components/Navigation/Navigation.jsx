import { useSelector } from 'react-redux';
import { Navlink } from './Navigation.styled';

export function Navigation() {
  const isLoaddedIn = useSelector(state => state.auth.isLoaddedIn);

  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      {isLoaddedIn && <Navlink to="/contacts">Contacts List</Navlink>}
    </nav>
  );
}
