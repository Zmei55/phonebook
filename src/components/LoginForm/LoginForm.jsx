import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLogInMutation } from 'redux/auth';
import { loginSuccess } from 'redux/auth';
import { Section, Title, Form, Label, Input, Button } from './LoginForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();
  const [login] = useLogInMutation();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async event => {
    event.preventDefault();

    const user = await login(formState).unwrap();
    dispatch(loginSuccess(user)); // диспатчим форму через authSlice в api

    setFormState('');
  };

  return (
    <Section>
      <Title>Log In</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input type="email" name="email" onChange={handleChange} />
        </Label>

        <Label>
          Password
          <Input type="password" name="password" onChange={handleChange} />
        </Label>

        <Button type="submit">Log In</Button>
      </Form>
    </Section>
  );
}
