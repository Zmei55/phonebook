import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: () => ({}),
});

// export const { useRegisterUserMutation, useLogInMutation, useLogOutMutation } =
//   api;

// ======================================================================

// baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     prepareHeaders: (headers, { getState }) => {
//       console.log('headers: ', headers);
//       const token = getState().auth.token;
//       console.log('token', token);
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['User'],
//   endpoints: () => ({}),
