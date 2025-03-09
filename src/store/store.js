import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { apiSlice } from "./apiSlice";
import cartReducer from "./cartSlice";
import { enquiryApiSlice } from "./enquiryApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [enquiryApiSlice.reducerPath]: enquiryApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      enquiryApiSlice.middleware
    ),
});

export default store;
