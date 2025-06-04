import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getPostById: builder.query({
            query: (postId) => `/posts/${postId}`,
        }),
        getTodos: builder.query({
            query: () => '/todos',
        }),
        getTodoById: builder.query({
            query: (todoId) => `/todos/${todoId}`,
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetTodosQuery,
    useGetTodoByIdQuery,} = api;
