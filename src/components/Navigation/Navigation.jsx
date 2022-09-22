import { Navlink } from './Navigation.styled';

export function Navigation() {
  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/contacts">Contacts List</Navlink>
    </nav>
  );
}
