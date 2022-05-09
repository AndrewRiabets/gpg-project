import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reportsAPI = createApi({
  reducerPath: 'reportsAPI',
  tagTypes: ['Reports'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/reports',
  }),
  endpoints: builder => ({
    createReport: builder.mutation({
      query: ({ token, newReport }) => ({
        url: `/create-report`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { ...newReport },
      }),
      invalidatesTags: ['Reports'],
    }),

    fetchCompanyReports: builder.mutation({
      query: ({ token, companyName }) => ({
        url: `/get-company-reports?reception=${companyName}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Reports'],
    }),

    fetchCompanyReport: builder.mutation({
      query: ({ token, reportId }) => ({
        url: `/get-company-report?reception=${reportId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Reports'],
    }),

    fetchUpdateReport: builder.mutation({
      query: ({ token, updatedReport }) => ({
        url: `/update-company-report`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { ...updatedReport },
      }),
      invalidatesTags: ['Reports'],
    }),
  }),
});
export const {
  useCreateReportMutation,
  useFetchCompanyReportsMutation,
  useFetchCompanyReportMutation,
  useFetchUpdateReportMutation,
} = reportsAPI;
