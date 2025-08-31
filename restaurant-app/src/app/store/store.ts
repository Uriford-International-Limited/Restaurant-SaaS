
"use client"
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/filters/filterSlice";
import favouriteSlice from "../redux/favourites/favouriteSlice"
import cartSlice from "../redux/Carts/cartSlice"

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    favourites:favouriteSlice,
    carts:cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
