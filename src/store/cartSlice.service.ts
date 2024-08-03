import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action: any) => {
      state.items.push(action.payload);
      state.total++;
    },
    removeItem: (state, action) => {
      state.items.pop();
      state.total--;
    },
    clearCart: (state, action: any) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
