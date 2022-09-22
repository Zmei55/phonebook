import { api } from 'redux/api';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),
    logIn: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetCurrentUserQuery,
} = authApi;
