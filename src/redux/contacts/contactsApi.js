import { api } from 'redux/api';

const contactsApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: ['Contacts'], // при query
    }),
    createNewContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'], // при mutation
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
