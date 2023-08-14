import { createSlice, current } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
          const itemInCart = state.find((item) => item.id === action.payload.id);
          if (itemInCart) {
            itemInCart.quantity++;
          } else {
            state.push({ ...action.payload, quantity: 1 });
          }
        },
        incrementQuantity: (state, action) => {
          const item = state.find((item) => item.id === action.payload);
          if (!item) return;
          item.quantity++;
        },
        decrementQuantity: (state, action) => {
          const item = state.find((item) => item.id === action.payload);
          if (!item) { return}
          if (item.quantity === 1) {
            item.quantity = 1
          } else {
            item.quantity--;
          }
        },
        removeItem: (state, action) => {
          return state.filter((item) => item.id !== action.payload);
        },
      },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export const cartReducer = cartSlice.reducer;