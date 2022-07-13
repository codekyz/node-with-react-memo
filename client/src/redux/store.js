import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import memoReducer from "./memoSlice";
import cheerReducer from "./cheerSlice";

import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
    memo: memoReducer,
    cheer: cheerReducer,
  },
  middleware: [thunk, promiseMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
