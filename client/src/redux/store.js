import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk, promiseMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
