import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/auth';

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
  const [registerUser] = useRegisterUserMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  // попробовать заменить switch
  // const [formValue, setFormValue] = useState(initialState);
  // setFormValue({ ...formValue, [e.target.name]: e.target.value})

  const handleSubmit = event => {
    event.preventDefault();

    const NewUser = {
      name: name,
      email: email,
      password: password,
    };

    registerUser(NewUser);

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
}
