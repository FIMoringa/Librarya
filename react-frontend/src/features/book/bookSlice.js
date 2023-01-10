import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBook, fetchBooks } from "./BookApi";

const initialState = {
  books: [],
  status: "idle",
  error: null,
};

export const fetchBooksAsync = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const books = await fetchBooks();
    return books;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooksAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.books = payload;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      });
  },
});

export const selectBooks = (state) => state.books.books;
export default bookSlice.reducer;
