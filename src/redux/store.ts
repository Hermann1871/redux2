import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";
import { personReducer } from "./personSlice";

// const countReducer = (state, action) => {} con useReducer
// const counterReducer = createReducer() non lo sapeva

export const store = configureStore({

    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        person: personReducer
    }
})

export type State = ReturnType<typeof store.getState>;