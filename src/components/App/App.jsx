import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container';
import { AppBar } from 'components/AppBar';
import { HomePage, ContactsPage, LoginPage, RegisterPage } from 'pages';

export function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Container>
  );
}
