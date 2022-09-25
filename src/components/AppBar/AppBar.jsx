import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';

export function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isLoggedOut = useSelector(state => state.auth.isLoggedOut);

  return (
    <header>
      <Navigation />
      {/* {isLoggedOut && <AuthNav />} */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
