import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";

// const countReducer = (state, action) => {} con useReducer

// const counterReducer = createReducer() non lo sapeva





export const store = configureStore({

    reducer: {
        counter: counterReducer,
        theme: themeReducer,
    }
})