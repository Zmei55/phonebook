import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Header } from './AppBar.styled';

export function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
