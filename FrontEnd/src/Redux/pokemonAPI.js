// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// get all prodect 
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-commerce-shop-react.onrender.com' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})


// get onle one produ ct 
export const onepokemonApi = createApi({
  reducerPath: 'onepokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-commerce-shop-react.onrender.com' }),
  endpoints: (builder) => ({
    getOneProduct: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetOneProductQuery } = onepokemonApi