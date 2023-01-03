import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    user: userSlice,
  },
});

export default store;
