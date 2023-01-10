import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteBook, fetchBook, fetchBooks } from "./BookApi";

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

export const deleteBookAsync = createAsyncThunk("books/deleteBook", async (id) => {
  await deleteBook(id);
});

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
      })
      .addCase(deleteBookAsync.fulfilled, (state, { payload }) => {
        state.books = state.books.filter((book) => book.id !== payload);
      })
      .addCase(deleteBookAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      });
  },
});

export const selectBooks = (state) => state.books.books;
export default bookSlice.reducer;
