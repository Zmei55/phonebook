import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from 'redux/auth';
import { loginSuccess } from 'redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export function RegisterPage() {
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
    <>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name
          <input type="text" name="name" onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
}
