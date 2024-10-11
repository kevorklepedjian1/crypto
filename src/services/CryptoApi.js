import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '7d0679974cmsh88ca69371eb1a5ap100fc1jsn0bd90c8ef452',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins'),
        }),
    }),
});

// Correctly export the hook
export const { useGetCryptosQuery } = cryptoApi; // Ensure this matches your endpoint name
