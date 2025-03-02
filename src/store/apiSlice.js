import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080", // ✅ Set base URL globally
    baseUrl: "https://birlaedutech.in:8080", // ✅ Set base URL globally
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
    signup: builder.mutation({
      query: (userData) => ({
        url: "/signup", // ✅ No need for full URL, `baseUrl` is already set
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    googleAuth: builder.mutation({
      query: (code) => ({
        url: `/auth/google?code=${code}`,
        method: "GET",
      }),
    }),
  }),
});

// ✅ Fix incorrect export name
export const { useSignupMutation, useGoogleAuthMutation, useLoginMutation } =
  apiSlice;
