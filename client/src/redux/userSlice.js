import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const requestUserLogin = createAsyncThunk(
  "user/requestUserLogin",
  async (payload) => {
    const response = await axios.post("/api/users/login", payload);
    return response.data;
  }
);

export const requestUserRegister = createAsyncThunk(
  "user/requestUserRegister",
  async (payload) => {
    const response = await axios.post("/api/users/register", payload);
    return response.data;
  }
);

export const requestUserAuth = createAsyncThunk(
  "user/requestUserAuth",
  async () => {
    const response = await axios.get("/api/users/auth");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    login: {},
    register: {},
    userData: {},
  },
  reducers: {
    // loginUser: (state, action) => {
    //   // const request = axios
    //   //   .post("/api/users/login", action.payload)
    //   //   .then((response) => response.data);
    //   return { ...state, loginSuccese: request };
    // },
  },
  extraReducers: {
    [requestUserLogin.fulfilled]: (state, action) => {
      return { ...state, login: action.payload };
    },
    [requestUserRegister.fulfilled]: (state, action) => {
      return { ...state, register: action.payload };
    },
    [requestUserAuth.fulfilled]: (state, action) => {
      return { ...state, userData: action.payload };
    },
  },
});

export default userSlice.reducer;
