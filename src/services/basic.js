import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoSplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["todos"],
  endpoints: () => ({}),
});