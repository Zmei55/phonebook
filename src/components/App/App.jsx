import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { HomePage, ContactsPage, LoginPage, RegisterPage } from 'pages';
// import { useSelector } from 'react-redux';
// import { useGetCurrentUserQuery } from 'redux/auth';

export function App() {
  // const token = useSelector(state => state.auth.token);
  // const isFetchingCurrentUser = useSelector();

  // useGetCurrentUserQuery(null, { skip: !token });

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
}
