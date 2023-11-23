import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice"
import serviceReducer from "./features/serviceSlice"

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        service: serviceReducer
    },
});