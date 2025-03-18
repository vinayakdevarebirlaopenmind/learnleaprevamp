import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../constants/constants";

export const enquiryApiSlice = createApi({
  reducerPath: "enquiryApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080",
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
    submitMandateDetails: builder.mutation({
      query: (formData) => {
        console.log("Submitting mandate details:", formData);
        return {
          url: "/api/updateUser",
          method: "POST",
          body: formData,
        };
      },
    }),
    submitEnquiryData: builder.mutation({
      query: (formData) => {
        console.log("Submitting enquiry data:", formData);
        return {
          url: "/api/enquiry",
          method: "POST",
          body: formData,
        };
      },
    }),
    submitAskMeEnquiryData: builder.mutation({
      query: (formData) => {
        console.log("Submitting enquiry data:", formData);
        return {
          url: "/api/askmeEnquiry",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateUserProfile: builder.mutation({
      query: (userData) => {
        console.log("Updating user profile:", userData);
        return {
          url: "/api/updateUserByUid",
          method: "POST",
          body: userData,
        };
      },
    }),
  }),
});

export const {
  useSubmitMandateDetailsMutation,
  useSubmitEnquiryDataMutation,
  useSubmitAskMeEnquiryDataMutation,
  useUpdateUserProfileMutation,
} = enquiryApiSlice;
