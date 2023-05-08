import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    uiState: uiReducer,
    cartState: cartReducer,
  },
});

export default store;
