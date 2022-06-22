import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.dishes.push(action.payload);
        },
    },
});

export const { addTocart } = cartSlice.actions;

export const selectCartItem = state => state.cart.dishes;

export default cartSlice.reducer;
