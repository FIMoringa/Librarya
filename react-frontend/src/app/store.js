import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from "../features/book/bookSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: bookSliceReducer,
  },
});
