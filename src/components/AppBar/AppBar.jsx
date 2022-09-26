import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';

export function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
