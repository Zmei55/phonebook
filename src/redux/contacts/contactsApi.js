import { api } from 'redux/api';

const contactsApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: (filterValue = '') => ({
        url: '/contacts',
        method: 'GET',
        params: {
          name: filterValue,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    createNewContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ contactId, ...body }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: {
          name: '',
          number: '',
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useCreateNewContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
