import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/auth",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    googleAuth: builder.mutation({
      query: (code) => ({
        url: `/google?code=${code}`, // ✅ Pass code as query param
        method: "GET", // ✅ Use GET method
      }),
    }),
  }),
});

export const { useGoogleAuthMutation } = apiSlice;
