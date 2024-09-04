import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../components/CartSlice";

export const store = configureStore({
  reducer: {
    cartProducts: CartReducer,
  },
});
