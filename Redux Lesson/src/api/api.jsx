import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Post','Todo'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Post'],
        }),
        getPostById: builder.query({
            query: (postId) => `/posts/${postId}`,
            providesTags: ['Post'],
        }),
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['Todo'],
        }),
        getTodoById: builder.query({
            query: (todoId) => `/todos/${todoId}`,
            providesTags: ['Todo'],
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post','Todo'],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetTodosQuery,
    useGetTodoByIdQuery,
    useDeletePostMutation,
    useDeleteTodoMutation,
} = api;