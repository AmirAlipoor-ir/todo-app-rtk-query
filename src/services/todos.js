import { todoSplitApi } from "./basic";

const extendedApi = todoSplitApi.injectEndpoints({
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
          id: Date.now().toString(),
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
    updateTodos: builder.mutation({
      query: ({ id, ...body }) => {
        console.log(body);
        return { url: `/todos/${id}`, method: "PATCH", body };
      },
      invalidatesTags: ["todos"],
    }),
  }),

  overrideExisting: false,
});
export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} = extendedApi;
export const { useExampleQuery } = extendedApi;
