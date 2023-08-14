import { createSlice } from "@reduxjs/toolkit";

const pantrySlice = createSlice({
    name: 'pantry',
    initialState: {
        pantry: [],

    },
    reducers: {
        addToPantry: (state, action) => {
            const itemInPantry = state.find((item) => item.id === action.payload.id);

            if (itemInPantry) {
                itemInPantry.quantity += 1;
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
            console.log(item);
            if (!item) { return}
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                return state.filter((item) => item.id !== action.payload);
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const { addToPantry, incrementQuantity, decrementQuantity, removeItem } = pantrySlice.actions;
export const selectPantry = (state) => state.pantry;
export const pantryReducer = pantrySlice.reducer;