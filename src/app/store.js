import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    user: userSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
