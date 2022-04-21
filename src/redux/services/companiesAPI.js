import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companiesAPI = createApi({
  reducerPath: 'companiesApi',
  tagTypes: ['Companies'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/companies',
  }),
  endpoints: builder => ({
    createCompany: builder.mutation({
      query: ({ token, newCompany }) => ({
        url: `/create-company`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { ...newCompany },
      }),
      invalidatesTags: ['Companies'],
    }),

    fetchAllCompanies: builder.mutation({
      query: token => ({
        url: `/get-companies`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Companies'],
    }),
    fetchCurrntUserCompanies: builder.mutation({
      query: token => ({
        url: `/get-user-companies?reception=currentuser`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Companies'],
    }),
    fetchSelectedUserCompanies: builder.mutation({
      query: ({ token, userId }) => ({
        url: `/get-user-companies?reception=${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Companies'],
    }),
    changeAccounter: builder.mutation({
      query: ({ token, newAccounter }) => ({
        url: `/change-accounter`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { ...newAccounter },
      }),
      invalidatesTags: ['Companies'],
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
export const {
  useCreateCompanyMutation,
  useFetchAllCompaniesMutation,
  useFetchCurrntUserCompaniesMutation,
  useFetchSelectedUserCompaniesMutation,
  useChangeAccounterMutation,
} = companiesAPI;
