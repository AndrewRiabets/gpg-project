import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersAPI = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
  }),
  endpoints: builder => ({
    createUser: builder.mutation({
      query: ({ token, newUser }) => ({
        url: `users/create-user`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { ...newUser },
      }),
      invalidatesTags: ['Users'],
    }),

    fetchAllUsers: builder.mutation({
      query: token => ({
        url: `users/get-users`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Users'],
    }),

    //     deleteTransaction: builder.mutation({
    //       query: ({ accessToken, delTransactionId }) => ({
    //         url: `/remove-transaction/${delTransactionId}`,
    //         method: 'DELETE',
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       }),
    //       invalidatesTags: ['Banking'],
    //     }),
  }),
});
export const { useCreateUserMutation, useFetchAllUsersMutation } = usersAPI;
