import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companiesAPI = createApi({
  reducerPath: 'companiesApi',
  tagTypes: ['Companies'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
  }),
  endpoints: builder => ({
    createCompany: builder.mutation({
      query: ({ token, newCompany }) => ({
        url: `companies/create-company`,
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
        url: `companies/get-companies`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
export const { useCreateCompanyMutation, useFetchAllCompaniesMutation } =
  companiesAPI;
