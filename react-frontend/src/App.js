import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import BookList from "./features/book/BookList";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path={"/"} element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;
