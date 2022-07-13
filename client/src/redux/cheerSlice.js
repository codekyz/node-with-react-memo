import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const requestCheer = createAsyncThunk(
  "cheer/requestCheer",
  async (payload) => {
    const response = await axios.post("/api/cheers", payload);
    return response.data;
  }
);

export const requestSearchCheer = createAsyncThunk(
  "cheer/requestSearchCheer",
  async (payload) => {
    const response = await axios.post("/api/cheers/search", payload);
    return response.data;
  }
);

export const requestCancelCheer = createAsyncThunk(
  "cheer/requestCancelCheer",
  async (payload) => {
    const response = await axios.post("/api/cheers/cancel", payload);
    return response.data;
  }
);

const cheerSlice = createSlice({
  name: "cheer",
  initialState: {
    search: [],
    cancel: {},
    cheerInfo: {},
  },
  reducers: {},
  extraReducers: {
    [requestCheer.fulfilled]: (state, action) => {
      return { ...state, cheerInfo: action.payload };
    },
    [requestSearchCheer.fulfilled]: (state, action) => {
      return { ...state, search: action.payload };
    },
    [requestCancelCheer.fulfilled]: (state, action) => {
      return { ...state, cancel: action.payload };
    },
  },
});

export default cheerSlice.reducer;
