
"use client"
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/filters/filterSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
