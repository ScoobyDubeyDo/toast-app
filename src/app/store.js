import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import menuReducer from "../features/menu/menuSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
    },
});
