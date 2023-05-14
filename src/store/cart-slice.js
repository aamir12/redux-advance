import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartState",
  initialState: {
    items: [],
    totalQuntity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuntity = action.payload.totalQuntity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      state.changed = true;
      state.totalQuntity++;
      let existingItem = state.items.find(
        (product) => product.id === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          description: newItem.description,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.totalPrice += newItem.price;
        existingItem.quantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      state.totalQuntity--;
      const itemId = action.payload;
      let item = state.items.find((product) => product.id === itemId);
      if (item.quantity === 1) {
        state.items = state.items.filter((product) => product.id !== itemId);
      } else {
        item.totalPrice -= item.price;
        item.quantity--;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
