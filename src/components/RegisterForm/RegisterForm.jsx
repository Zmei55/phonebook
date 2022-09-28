import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from 'redux/auth';
import { loginSuccess } from 'redux/auth';
import {
  Section,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './RegisterForm.styled';

export function RegisterForm() {
  const dispatch = useDispatch();
  const [registerUser] = useRegisterUserMutation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));
  // попробовать заменить switch
  // const [formValue, setFormValue] = useState(initialState);
  // setFormValue({ ...formValue, [e.target.name]: e.target.value})

  const handleSubmit = async event => {
    event.preventDefault();

    const user = await registerUser(formState).unwrap();
    dispatch(loginSuccess(user));

    setFormState('');
  };

  return (
    <Section>
      <Title>Register</Title>

      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="text" name="name" onChange={handleChange} />
        </Label>

        <Label>
          Email
          <Input type="email" name="email" onChange={handleChange} />
        </Label>

        <Label>
          Password
          <Input type="password" name="password" onChange={handleChange} />
        </Label>

        <Button type="submit">Register</Button>
      </Form>
    </Section>
  );
}
