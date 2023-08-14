import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/Shopping/inventory/inventorySlice';
import { cartReducer } from '../features/Shopping/cart/cartSlice';
import { pantryReducer } from '../features/Pantry/pantrySlice'
import { combineReducers } from '@reduxjs/toolkit';
 
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}




const reducers = combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
  pantry: pantryReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);