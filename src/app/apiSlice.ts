import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    tagTypes: ['Repos'],
    endpoints: builder => ({
        getRepositories: builder.query({
            query: (arr) => ``,
            providesTags: ['Repos']
        })
    })
});

// export const {useGetRepositoriesQuery, useGetChangePageQuery} = apiSlice;