import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice"
import cartStore from "./cartSlice"

export default configureStore({
    reducer: {
        books,
        cartStore,
    },
    devTools: true
})