import { configureStore } from "@reduxjs/toolkit"
import cartSliceRducer from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartSliceRducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})
