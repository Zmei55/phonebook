import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { Spinner } from 'components/Spinner';
import { Toaster } from 'react-hot-toast';

const HomePage = loadable(() => import('pages/HomePage'), {
  fallback: <Spinner />,
});
const ContactsPage = loadable(() => import('pages/ContactsPage'), {
  fallback: <Spinner />,
});
const LoginPage = loadable(() => import('pages/LoginPage'), {
  fallback: <Spinner />,
});
const RegisterPage = loadable(() => import('pages/RegisterPage'), {
  fallback: <Spinner />,
});
const NotFoundPage = loadable(() => import('pages/NotFoundPage'), {
  fallback: <Spinner />,
});

export function App() {
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
          <Route
            path="*"
            element={
              <PublicRoute>
                <NotFoundPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Container>
  );
}
