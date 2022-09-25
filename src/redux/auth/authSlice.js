import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
    },
    refreshUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;
export default authSlice.reducer;

// =============================================================================

// import { createSlice } from '@reduxjs/toolkit';
// import { api } from 'redux/api';

// const initialState = {
//   name: '',
//   email: '',
//   token: '',
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, { payload }) => {
//       const { user, token } = payload;

//       state.email = user.email;
//       state.name = user.name;
//       state.token = token;
//     },
//   },
//   extraReducers: builder => {
//     //register
//     builder.addMatcher(
//       api.endpoints.registerUser.matchFullfilld,
//       (state, { payload }) => {
//         const { user, token } = payload;

//         state.email = user.email;
//         state.name = user.name;
//         state.token = token;
//       }
//     );
//     // login
//     builder.addMatcher(
//       api.endpoints.logIn.matchFullfilld,
//       (state, { payload }) => {
//         const { user, token } = payload;

//         state.email = user.email;
//         state.name = user.name;
//         state.token = token;
//       }
//     );
//     // logout
//     builder.addMatcher(
//       api.endpoints.logOut.matchFullfilld,
//       (state, { payload }) => {
//         const { user, token } = payload;

//         state.email = user.email;
//         state.name = user.name;
//         state.token = token;
//       }
//     );
//   },
// });

// // export const selectAuth = state => state.auth;
// export const { loginSuccess } = authSlice.actions;
// export default authSlice.reducer;

// ===================================================================================

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   name: null,
//   token: null,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       localStorage.setItem(
//         'user',
//         JSON.stringify({
//           name: action.payload.name,
//           token: action.payload.token,
//         })
//       );
//       state.name = action.payload.name;
//       state.token = action.payload.token;
//     },
//   },
// });

// export const selectAuth = state => state.auth;
// export const { setUser } = authSlice.actions;
// export default authSlice.reducer;
