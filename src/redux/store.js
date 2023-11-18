import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

//Importing the reducer from countSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
