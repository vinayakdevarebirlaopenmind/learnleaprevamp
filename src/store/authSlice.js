import { createSlice } from "@reduxjs/toolkit";

// Load token and user from localStorage if available
const token = localStorage.getItem("accessToken");
const user = token ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
  user: user || null,
  token: token || null,
  isAuthenticated: !!token, // If there's a token, user is authenticated
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
