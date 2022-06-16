import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const requestUserLogin = createAsyncThunk(
  "user/requestUserLogin",
  async (payload) => {
    const response = await axios.post("/api/users/login", payload);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
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
      return { ...state, user: action.payload };
    },
  },
});

export default userSlice.reducer;
