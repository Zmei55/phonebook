import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useGetCurrentUserQuery } from 'redux/auth';
import { Container } from 'components/Container';
import { AppBar } from 'components/AppBar';
import { HomePage, ContactsPage, LoginPage, RegisterPage } from 'pages';

export function App() {
  const token = useSelector(state => state.auth.token);
  // const isFetchingCurrentUser = useSelector();

  useGetCurrentUserQuery(null, { skip: !token });

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted redirectTo="contacts">
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Container>
  );
}
