import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '1c9a089c49msh1bb9b730de75a0fp125028jsn1d4d02af6cc2'
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
// const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),

        }),
        getCryptoHistory: builder.query({
            query: (coinId,timePeriod) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),

        })
    })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
}=cryptoApi;





























// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '1c9a089c49msh1bb9b730de75a0fp125028jsn1d4d02af6cc2',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };