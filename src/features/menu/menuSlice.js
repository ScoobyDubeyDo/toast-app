import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [
        {
            title: "dish one",
            imUrl: "https://picsum.photos/seed/picsum/200/300",
            price: 232,
            isVeg: true,
            id: "21212xcv12",
        },
        {
            title: "dish two",
            imUrl: "https://picsum.photos/seed/picsum/200/300",
            price: 323,
            isVeg: true,
            id: "2xcv121212",
        },
        {
            title: "dish three",
            imUrl: "https://picsum.photos/seed/picsum/200/300",
            price: 234,
            isVeg: false,
            id: "2121212ntrrt",
        },
        {
            title: "dish four",
            imUrl: "https://picsum.photos/seed/picsum/200/300",
            price: 123,
            isVeg: true,
            id: "212sdfd1212",
        },
    ],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        // increment: state => {
        //     state.value += 1;
        // },
        // decrement: state => {
        //     state.value -= 1;
        // },
    },
});

export const selectMenuItem = state => state.menu.dishes;

export default menuSlice.reducer;
