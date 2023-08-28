import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice'
import categoryReducer from './categorySlice'

const store = configureStore({
    reducer:{
         cart:cartReducer,
         product: productReducer,
         category:categoryReducer,
    }
})

export default store;