import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cartSlice"

export default configureStore({
    reducer: {
        cartStore,
    },
    devTools: true
})