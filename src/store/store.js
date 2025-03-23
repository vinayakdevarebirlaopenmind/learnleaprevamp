import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { apiSlice } from "./apiSlice";
import cartReducer from "./cartSlice";
import { enquiryApiSlice } from "./enquiryApiSlice";
import wishlistReducer from "../components/slice/wishlistSlice";
import { applyAsInstructorSlice } from "../components/slice/applyAsInstructorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [enquiryApiSlice.reducerPath]: enquiryApiSlice.reducer,
    [applyAsInstructorSlice.reducerPath]: applyAsInstructorSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      enquiryApiSlice.middleware, applyAsInstructorSlice.middleware
    ),
});

export default store;
