import { Navlink, AuthContainer } from './AuthNav.styled';

export function AuthNav() {
  return (
    <AuthContainer>
      <Navlink to="/login">Log In</Navlink>
      <Navlink to="/register">Register</Navlink>
    </AuthContainer>
  );
}
