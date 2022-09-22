import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLogInMutation } from 'redux/auth';
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

export function LoginPage() {
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
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button type="submit">Log In</button>
      </form>
    </>
  );
}

// ===================================================================================

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLogInMutation } from 'redux/api';
// import { loginSuccess } from 'redux/auth/authSlice';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

// export function LoginPage() {
//   const dispatch = useDispatch();
//   const [login] = useLogInMutation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     const User = {
//       email: email,
//       password: password,
//     };

//     // login(User);
//     const x = await login(User).unwrap();
//     dispatch(loginSuccess(x));

//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label style={styles.label}>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label style={styles.label}>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Log In</button>
//       </form>
//     </>
//   );
// }
