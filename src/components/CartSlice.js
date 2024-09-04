import { createSlice } from "@reduxjs/toolkit";

/* Initial state */
const initialState = {
  cartProducts: [],
  totalValue: null,
};


/* CartSlice */
export const CartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cartProducts.find((product) => {
        return product.id === action.payload.id;
      });
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const increase = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (increase) {
        increase.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const decrease = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (decrease && decrease.quantity > 1) {
        decrease.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (ele) => ele.id !== action.payload.id
      );
    },
    addTotalValue: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});


export const {
  addCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  addTotalValue,
} = CartSlice.actions;

export default CartSlice.reducer;
