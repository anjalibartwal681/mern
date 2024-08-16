import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
