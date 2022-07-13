import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const requestAllMemo = createAsyncThunk(
  "memo/requestAllMemo",
  async (payload) => {
    const response = await axios.post("/api/memos/all", payload);
    return response.data;
  }
);

export const requestMyMemo = createAsyncThunk(
  "memo/requestMyMemo",
  async (payload) => {
    const response = await axios.post("/api/memos/mymemo", payload);
    return response.data;
  }
);

export const requestSubmitMemo = createAsyncThunk(
  "memo/requestSubmitMemo",
  async (payload) => {
    const response = await axios.post("/api/memos", payload);
    return response.data;
  }
);

export const requestUpdateMemo = createAsyncThunk(
  "memo/requestUpdateMemo",
  async (payload) => {
    const response = await axios.put("/api/memos/update", payload);
    return response.data;
  }
);

const memoSlice = createSlice({
  name: "memo",
  initialState: {
    allMemo: [],
    myMemo: [],
    submitMemo: {},
    updateMemo: {},
  },
  reducers: {},
  extraReducers: {
    [requestAllMemo.fulfilled]: (state, action) => {
      return { ...state, allMemo: action.payload };
    },
    [requestMyMemo.fulfilled]: (state, action) => {
      return { ...state, myMemo: action.payload };
    },
    [requestSubmitMemo.fulfilled]: (state, action) => {
      return { ...state, submitMemo: action.payload };
    },
    [requestUpdateMemo.fulfilled]: (state, action) => {
      return { ...state, updateMemo: action.payload };
    },
  },
});

export default memoSlice.reducer;
