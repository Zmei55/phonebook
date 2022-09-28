import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Header } from './Layout.styled';

export function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
      {/* то место, где вся основная часть сайта, меняющаяся */}
      {/* <footer>2022</footer> */}
    </>
  );
}
