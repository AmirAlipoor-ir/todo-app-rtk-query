import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({ url: "/todos", method: "GET" }),
      providesTags: ["todos"],
    }),
    addTodos: builder.mutation({
      query: (title) => ({
        url: "/todos",
        method: "POST",
        body: {
          title,
          id: (Date.now()).toString(),
          completed: false,
        },
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodos: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation } =
  apiSlice;
