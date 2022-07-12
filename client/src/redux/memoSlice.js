import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const requestAllMemo = createAsyncThunk(
  "memo/requestAllMemo",
  async (payload) => {
    const response = await axios.post("/api/memos/all", payload);
    return response.data;
  }
);

const memoSlice = createSlice({
  name: "memo",
  initialState: {
    allMemo: [],
  },
  reducers: {},
  extraReducers: {
    [requestAllMemo.fulfilled]: (state, action) => {
      return { ...state, allMemo: action.payload };
    },
  },
});

export default memoSlice.reducer;
