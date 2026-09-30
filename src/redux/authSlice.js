import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("accessToken");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  accessToken: storedToken || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const token = Math.random().toString(36).substring(2) + Date.now();

      state.user = action.payload;
      state.accessToken = token;

      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("accessToken", token);
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { signup, logout } = authSlice.actions;

export default authSlice.reducer;