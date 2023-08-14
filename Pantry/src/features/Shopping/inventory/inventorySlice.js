import { createSlice } from '@reduxjs/toolkit';

import { produce } from './storeItems';

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        items: produce,
    },
    reducers: {

    },
}); 

export const selectInventory = (state) => state.inventory.items;
export default inventorySlice.reducer;
