import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product={
    id: number;
    title: string;
    category: string;
    rating: number;
    stock: number;
    tags: string[];
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => 'products'
        }),
        getProduct: builder.query<Product, number>({
            query: (id) => `products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery } = productsApi