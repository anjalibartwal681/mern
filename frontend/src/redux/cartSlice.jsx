import { createSlice } from "@reduxjs/toolkit";

const SavedCartData = localStorage.getItem("cartData");
const initialstate = SavedCartData ? JSON.parse(SavedCartData) : {};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, imgSrc, price } = action.payload;
      const itemIncart = state[id];

      if (itemIncart) {
        itemIncart.quantity++;
      } else {
        state[id] = { item: { id, imgSrc, price }, quantity: 1 };
        localStorage.setItem("cartData", JSON.stringify(state));
      }
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const itemIncart = state[id];
      if (itemIncart) {
        itemIncart.quantity++;
        itemIncart.price = parseInt(itemIncart.price) * itemIncart.quantity;
      }
    },
    decremententQuantity: (state, action) => {
      const id = action.payload;
      const itemIncart = state[id];
      if (itemIncart) {
        if (itemIncart.quantity > 0) {
          itemIncart.quantity--;
          itemIncart.price = parseInt(itemIncart.price) * itemIncart.quantity;
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state[id];
    },
  },
});
export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decremententQuantity,
  removeItem,
} = cartSlice.actions;
