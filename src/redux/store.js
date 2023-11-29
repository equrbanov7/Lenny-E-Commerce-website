import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/categoryReducer";
import { productReducer } from "./reducers/productReducer";
import { cardReducer } from "./reducers/cardReducer";
import { searchReducer } from "./reducers/searchReducer";

import {AuthReducer} from "./reducers/index"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



 
const persistConfig = {
  key: 'root',
  storage,
}

// Configuration for authentication data with a different key
const authPersistConfig = {
  key: 'auth', // Use a different key for authentication storage
  storage,
};
   
const filterSet = {
  key: 'filter', // Use a different key for authentication storage
  storage,
  whitelist: ['filterObj','checkFilterControl','checkPriceRangeControl','checkCategoryControl']
};
   
const persistedReducer = persistReducer(persistConfig, cardReducer)
const persistedAuthReducer = persistReducer(authPersistConfig, AuthReducer)
const persistedCtgReducer = persistReducer(filterSet, categoryReducer)
 

export const store = configureStore({
  reducer: {
    categories: persistedCtgReducer,
    products: productReducer, 
    selectedProducts: persistedReducer,
    searching: searchReducer,
    auth:persistedAuthReducer
    // Place it inside the reducer object
  }
});

export const persistor = persistStore(store);