import { Navlink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <>
      <Navlink to="/login">Log In</Navlink>
      <Navlink to="/register">Register</Navlink>
    </>
  );
}
