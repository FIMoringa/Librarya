import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {  fetchAuthor, fetchAuthors } from "./authorApi";

const initialState = {
  authors: [],
  status: "idle",
  error: null,
  author: {},
};

export const fetchAuthorsAsync = createAsyncThunk(
  "authors/fetchAuthors",
  async (id) => {
    const authors = await fetchAuthors();
    return authors;
  }
);

export const fetchAuthorAsync = createAsyncThunk(
  "authors/fetchAuthors",
  async (id) => {
    const author = await fetchAuthor(id);
    return author;
  }
);

export const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthorsAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.authors = payload;
      })
      .addCase(fetchAuthorsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      });
  },
});

export const selectAuthors = (state) => state.authors.authors;

export default authorSlice.reducer;
