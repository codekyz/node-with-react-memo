import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import memoReducer from "./memoSlice";

import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
    memo: memoReducer,
  },
  middleware: [thunk, promiseMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
