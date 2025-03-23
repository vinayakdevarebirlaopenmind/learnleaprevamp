import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants/constants";

export const applyAsInstructorSlice = createApi({
  reducerPath: "instructorapi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
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
    submitInstructorDetails: builder.mutation({
      query: (formData) => {
        // Ensure formData is an instance of FormData
        const data = formData instanceof FormData ? formData : new FormData();

        if (!(formData instanceof FormData)) {
          Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
          });
        }

        return {
          url: "/api/applyasinstructor",
          method: "POST",
          body: data, // Send FormData directly
        };
      },
    }),
  }),
});

export const { useSubmitInstructorDetailsMutation } = applyAsInstructorSlice;
